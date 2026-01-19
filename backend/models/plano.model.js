class PlanoAlimentar {
  constructor(data) {
    this.idade = data.idade;
    this.peso = data.peso;
    this.altura = data.altura;
    this.atividade = data.atividade;
    this.objetivo = data.objetivo;
    this.genero = data.genero || 'feminino';
    this.dataCriacao = new Date();
  }
  
  toJSON() {
    return {
      idade: this.idade,
      peso: this.peso,
      altura: this.altura,
      atividade: this.atividade,
      objetivo: this.objetivo,
      genero: this.genero,
      dataCriacao: this.dataCriacao
    };
  }
}

module.exports = PlanoAlimentar;
