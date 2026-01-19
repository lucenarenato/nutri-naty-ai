class ValidationUtils {
  static validatePlanoData(data) {
    const errors = [];
    
    if (!data.idade || data.idade < 1 || data.idade > 120) {
      errors.push('Idade deve estar entre 1 e 120 anos');
    }
    
    if (!data.peso || data.peso < 30 || data.peso > 300) {
      errors.push('Peso deve estar entre 30kg e 300kg');
    }
    
    if (!data.altura || data.altura < 100 || data.altura > 250) {
      errors.push('Altura deve estar entre 100cm e 250cm');
    }
    
    const atividadesValidas = ['sedentario', 'leve', 'moderado', 'intenso', 'atleta'];
    if (!data.atividade || !atividadesValidas.includes(data.atividade)) {
      errors.push('Nível de atividade inválido');
    }
    
    const objetivosValidos = ['emagrecer', 'ganhar-massa', 'definicao', 'manter', 'saude'];
    if (!data.objetivo || !objetivosValidos.includes(data.objetivo)) {
      errors.push('Objetivo inválido');
    }
    
    const generosValidos = ['feminino', 'masculino', 'outro'];
    if (data.genero && !generosValidos.includes(data.genero)) {
      errors.push('Gênero inválido');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
  
  static calculateIMC(peso, altura) {
    const alturaMetros = altura / 100;
    return peso / (alturaMetros * alturaMetros);
  }
  
  static getStatusIMC(imc) {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 25) return 'Peso normal';
    if (imc < 30) return 'Sobrepeso';
    return 'Obesidade';
  }
}

module.exports = ValidationUtils;
