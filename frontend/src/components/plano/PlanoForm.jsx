import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import {
  User,
  Scale,
  Ruler,
  Activity,
  Target,
  Sparkles,
  Venus,
  Mars
} from 'lucide-react'

const PlanoForm = () => {
  const {
    formData,
    setFormData,
    loading,
    imc,
    statusIMC,
    handleSubmit
  } = useContext(AppContext)

  const atividades = [
    { value: 'sedentario', label: 'Sedentário', desc: 'Pouco exercício' },
    { value: 'leve', label: 'Leve', desc: '1-3 dias/semana' },
    { value: 'moderado', label: 'Moderado', desc: '3-5 dias/semana' },
    { value: 'intenso', label: 'Intenso', desc: '6-7 dias/semana' },
    { value: 'atleta', label: 'Atleta', desc: '2x ao dia' }
  ]

  const objetivos = [
    { value: 'emagrecer', label: '🥗 Emagrecer', color: 'bg-green-100 text-green-800' },
    { value: 'ganhar-massa', label: '💪 Massa', color: 'bg-blue-100 text-blue-800' },
    { value: 'definicao', label: '🔥 Definição', color: 'bg-red-100 text-red-800' },
    { value: 'manter', label: '⚖️ Manter', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'saude', label: '❤️ Saúde', color: 'bg-purple-100 text-purple-800' }
  ]

  const getIMCColor = () => {
    if (!imc) return 'bg-gray-100 text-gray-800'
    const imcNum = parseFloat(imc)
    if (imcNum < 18.5) return 'bg-blue-100 text-blue-800'
    if (imcNum < 25) return 'bg-green-100 text-green-800'
    if (imcNum < 30) return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-green-100 animate-fade-in">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <div className="p-2 bg-green-100 rounded-lg">
          <User className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
        </div>
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            Seus Dados Pessoais
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Informe seus dados para um plano personalizado
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Idade
              </div>
            </label>
            <input
              type="number"
              min="1"
              max="120"
              required
              value={formData.idade}
              onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition text-sm sm:text-base"
              placeholder="Ex: 25"
              inputMode="numeric"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4" />
                Peso (kg)
              </div>
            </label>
            <input
              type="number"
              step="0.1"
              min="30"
              max="300"
              required
              value={formData.peso}
              onChange={(e) => setFormData({ ...formData, peso: e.target.value })}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition text-sm sm:text-base"
              placeholder="Ex: 70.5"
              inputMode="decimal"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4" />
                Altura (cm)
              </div>
            </label>
            <input
              type="number"
              min="100"
              max="250"
              required
              value={formData.altura}
              onChange={(e) => setFormData({ ...formData, altura: e.target.value })}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition text-sm sm:text-base"
              placeholder="Ex: 175"
              inputMode="numeric"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gênero
            </label>
            <div className="flex gap-2 sm:gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, genero: 'feminino' })}
                className={`flex-1 py-2 sm:py-3 rounded-lg sm:rounded-xl border flex items-center justify-center gap-1 sm:gap-2 transition text-sm sm:text-base ${formData.genero === 'feminino'
                    ? 'bg-pink-50 border-pink-300 text-pink-700'
                    : 'border-gray-300 hover:border-pink-300'
                  }`}
              >
                <Venus className="w-4 h-4 sm:w-5 sm:h-5" />
                Feminino
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, genero: 'masculino' })}
                className={`flex-1 py-2 sm:py-3 rounded-lg sm:rounded-xl border flex items-center justify-center gap-1 sm:gap-2 transition text-sm sm:text-base ${formData.genero === 'masculino'
                    ? 'bg-blue-50 border-blue-300 text-blue-700'
                    : 'border-gray-300 hover:border-blue-300'
                  }`}
              >
                <Mars className="w-4 h-4 sm:w-5 sm:h-5" />
                Masculino
              </button>
            </div>
          </div>
        </div>

        {/* Nível de Atividade - BOTÕES COM TEXTO CENTRALIZADO */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
              Nível de Atividade Física
            </div>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
            {atividades.map((atv) => (
              <button
                key={atv.value}
                type="button"
                onClick={() => setFormData({ ...formData, atividade: atv.value })}
                className={`p-2 sm:p-4 rounded-lg sm:rounded-xl border flex flex-col items-center justify-center text-center h-full min-h-[80px] sm:min-h-[100px] transition ${formData.atividade === atv.value
                    ? 'bg-green-50 border-green-500 text-green-700 shadow-sm'
                    : 'border-gray-300 hover:border-green-300'
                  }`}
              >
                <div className="font-medium text-xs sm:text-sm mb-1">{atv.label}</div>
                <div className="text-xs text-gray-600 hidden sm:block">{atv.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Objetivo - BOTÕES COM TEXTO CENTRALIZADO */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 sm:w-5 sm:h-5" />
              Seu Objetivo
            </div>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
            {objetivos.map((obj) => (
              <button
                key={obj.value}
                type="button"
                onClick={() => setFormData({ ...formData, objetivo: obj.value })}
                className={`p-2 sm:p-4 rounded-lg sm:rounded-xl border flex items-center justify-center text-center h-full min-h-[60px] sm:min-h-[80px] transition text-xs sm:text-sm ${formData.objetivo === obj.value
                    ? `${obj.color} border-current shadow-sm`
                    : 'border-gray-300 hover:border-current'
                  }`}
              >
                <div className="font-medium">{obj.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Calculadora IMC */}
        {imc && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-green-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
              📊 Seu IMC Calculado
            </h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{imc}</div>
                <div className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mt-2 ${getIMCColor()}`}>
                  {statusIMC}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500"></div>
                  <span className="text-xs">Abaixo</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs">Normal</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-xs">Sobrepeso</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <span className="text-xs">Obesidade</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Botão Gerar */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl'
            } text-white relative overflow-hidden`}
        >
          {loading ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 animate-pulse"></div>
              <span className="relative flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Gerando...
              </span>
            </>
          ) : (
            <span className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 sm:w-6 sm:h-6" />
              Gerar Plano com IA
            </span>
          )}
        </button>
      </form>
    </div>
  )
}

export default PlanoForm
