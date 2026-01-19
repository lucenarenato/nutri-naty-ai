import React from 'react'
import { Droplets, Clock, Apple } from 'lucide-react'
import natyImage from '../../assets/naty.png'

const DicasNutri = () => {
  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDUiIGZpbGw9IiMxMGI5ODEiLz48cGF0aCBkPSJNMzUgNjJDMzUgNzIuMzYxNSA0My42Mzg1IDgxIDUzIDgxQzYyLjM2MTUgODEgNzEgNzIuMzYxNSA3MSA2MkM3MSA1MS42Mzg1IDYyLjM2MTUgNDMgNTMgNDNDNDMuNjM4NSA0MyAzNSA1MS42Mzg1IDM1IDYyWiIgZmlsbD0iI2ZmZmZmZiIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iNTAiIHI9IjQiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSI2NiIgY3k9IjUwIiByPSI0IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTUwIDYyTDUwIDY4IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+'
  }

  return (
    <div className="bg-gradient-to-br from-white to-green-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-green-100 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-green-300">
            <img
              src={natyImage}
              alt="Naty"
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">Dicas da Naty</h3>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium self-start sm:self-center">
              Nutricionista IA
            </span>
          </div>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-start gap-2 sm:gap-3">
              <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-sm sm:text-base">
                <strong>Hidratação:</strong> Beba água regularmente, mesmo sem sede.
              </p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-sm sm:text-base">
                <strong>Regularidade:</strong> Mantenha horários fixos para as refeições.
              </p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <Apple className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-sm sm:text-base">
                <strong>Variedade:</strong> Consuma frutas e vegetais de cores diferentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DicasNutri
