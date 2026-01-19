import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { Sparkles, Download, Apple } from 'lucide-react'

const ResultadoPlano = () => {
  const {
    plano,
    imc,
    copied,
    handleDownload,
    handleCopy,
    formData
  } = useContext(AppContext)

  return (
    <div className="sticky top-4 sm:top-8">
      {plano ? (
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-green-200 animate-fade-in">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Seu Plano Alimentar
                </h2>
                <p className="text-green-100 text-xs sm:text-sm">
                  Personalizado por {formData.genero === 'feminino' ? 'Natália' : 'Natanael'} (IA)
                </p>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopy}
                  className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition flex items-center justify-center gap-2 text-sm sm:text-base"
                  disabled={!plano}
                >
                  {copied ? '✓ Copiado!' : '📋 Copiar'}
                </button>
                <button
                  onClick={handleDownload}
                  className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-white text-green-700 hover:bg-green-50 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm sm:text-base"
                  disabled={!plano}
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Baixar</span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-3 sm:p-4 md:p-6 max-h-[calc(100vh-150px)] sm:max-h-[calc(100vh-200px)] overflow-y-auto">
            <div className="prose prose-green max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-gray-800 bg-gray-50 p-3 sm:p-4 rounded-lg text-xs sm:text-sm leading-relaxed">
                {plano}
              </pre>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 text-center border border-green-100 h-full flex flex-col items-center justify-center animate-fade-in">
          <div className="relative mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
              <Apple className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-green-500" />
            </div>
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </div>
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            Seu Plano Personalizado Awaits
          </h3>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base max-w-md mx-auto">
            Preencha seus dados ao lado e a Nutri Naty irá criar um plano alimentar
            100% personalizado usando inteligência artificial avançada.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Instantâneo</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>Baseado em Ciência</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span>Acompanhamento 24h</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ResultadoPlano
