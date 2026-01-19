import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 segundos timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// Interceptor para tratamento de erros
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error)

    if (error.response) {
      // Servidor respondeu com status de erro
      throw new Error(error.response.data.error || `Erro ${error.response.status}`)
    } else if (error.request) {
      // Requisição foi feita mas não houve resposta
      throw new Error('Não foi possível conectar ao servidor. Verifique sua conexão.')
    } else {
      // Erro na configuração da requisição
      throw new Error('Erro ao configurar a requisição.')
    }
  }
)

const planoService = {
  async gerarPlano(dados) {
    return api.post('/plano/gerar', dados)
  },

  async checkHealth() {
    return api.get('/health')
  }
}

export default planoService
