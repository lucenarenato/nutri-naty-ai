const Groq = require('groq-sdk');

class GroqService {
  constructor() {
    this.groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }
  
  async gerarPlanoAlimentar(dados) {
    const prompt = this.criarPrompt(dados);
    
    try {
      const chatCompletion = await this.groq.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'llama-3.3-70b-versatile',
        temperature: 0.7,
        max_tokens: 2000
      });
      
      return chatCompletion.choices[0]?.message?.content || 'Não foi possível gerar o plano.';
    } catch (error) {
      console.error('Erro no serviço Groq:', error);
      throw new Error('Falha ao se comunicar com o serviço de IA');
    }
  }
  
  criarPrompt(dados) {
    const { idade, peso, altura, atividade, objetivo, genero } = dados;
    
    // Calcular IMC
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    
    return `Priorize a máxima diversidade de grupos alimentares, evitando repetições e focando em uma dieta colorida e variada. Como nutricionista profissional, crie um plano alimentar personalizado com as seguintes informações:
    
    📋 DADOS DO PACIENTE:
    - Idade: ${idade} anos
    - Peso: ${peso} kg
    - Altura: ${altura} cm (IMC: ${imc.toFixed(1)})
    - Gênero: ${genero || 'Não informado'}
    - Nível de atividade: ${atividade}
    - Objetivo: ${objetivo}
    
    🎯 POR FAVOR, FORMATE A RESPOSTA DA SEGUINTE FORMA:
    
    # 🥗 PLANO ALIMENTAR PERSONALIZADO
    
    ## 📊 RESUMO NUTRICIONAL
    • Calorias diárias: [valor] kcal
    • Proteínas: [valor]g
    • Carboidratos: [valor]g
    • Gorduras: [valor]g
    
    ## 🕗 HORÁRIOS DAS REFEIÇÕES
    
    ### ☀️ CAFÉ DA MANHÃ (07:00)
    - Opção 1: [alimento]
    - Opção 2: [alimento]
    - Opção 3: [alimento]
    
    ### 🍎 LANCHE DA MANHÃ (10:00)
    - [alimento]
    
    ### 🍽️ ALMOÇO (12:30)
    - Proteína: [alimento]
    - Carboidrato: [alimento]
    - Legumes: [alimento]
    - Salada: [alimento]
    
    ### 🥛 LANCHE DA TARDE (16:00)
    - [alimento]
    
    ### 🌙 JANTAR (19:30)
    - [alimento]
    - [alimento]
    
    ### 🌜 CEIA (22:00 - opcional)
    - [alimento]
    
    ## 💡 RECOMENDAÇÕES IMPORTANTES
    1. Beba pelo menos 2L de água por dia
    2. Evite alimentos ultraprocessados
    3. Mantenha horários regulares
    4. Acompanhe seu progresso semanalmente
    
    ## ⚠️ AVISO
    Este plano é uma recomendação geral. Consulte um nutricionista para orientação personalizada.`;
  }
}

module.exports = new GroqService();
