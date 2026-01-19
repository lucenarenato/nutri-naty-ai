const PlanoAlimentar = require('../models/plano.model');
const ValidationUtils = require('../utils/validation');
const GroqService = require('../services/groq.service');

class PlanoController {
  async gerarPlano(req, res) {
    try {
      const dados = req.body;
      
      // Validação
      const validacao = ValidationUtils.validatePlanoData(dados);
      if (!validacao.isValid) {
        return res.status(400).json({
          success: false,
          errors: validacao.errors
        });
      }
      
      // Criar modelo
      const plano = new PlanoAlimentar(dados);
      
      // Calcular IMC
      const imc = ValidationUtils.calculateIMC(plano.peso, plano.altura);
      const statusIMC = ValidationUtils.getStatusIMC(imc);
      
      // Gerar plano com IA
      const conteudoPlano = await GroqService.gerarPlanoAlimentar(plano.toJSON());
      
      // Log da requisição (em produção, salvaria em banco de dados)
      console.log(`Plano gerado para: ${plano.idade} anos, ${plano.peso}kg, ${plano.objetivo}`);
      
      res.json({
        success: true,
        plano: conteudoPlano,
        imc: imc.toFixed(1),
        statusIMC,
        dados: plano.toJSON()
      });
      
    } catch (error) {
      console.error('Erro no controller:', error);
      res.status(500).json({
        success: false,
        error: 'Erro ao gerar plano alimentar',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
}

module.exports = new PlanoController();
