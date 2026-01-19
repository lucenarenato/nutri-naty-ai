import React from 'react'
import { Sparkles, ChefHat, Apple } from 'lucide-react'
import natyImage from '../../assets/naty.png'

const Header = () => {
  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDUiIGZpbGw9IiMxMGI5ODEiLz48cGF0aCBkPSJNMzUgNjJDMzUgNzIuMzYxNSA0My42Mzg1IDgxIDUzIDgxQzYyLjM2MTUgODEgNzEgNzIuMzYxNSA3MSA2MkM3MSA1MS42Mzg1IDYyLjM2MTUgNDMgNTMgNDNDNDMuNjM4NSA0MyAzNSA1MS42Mzg1IDM1IDYyWiIgZmlsbD0iI2ZmZmZmZiIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iNTAiIHI9IjQiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSI2NiIgY3k9IjUwIiByPSI0IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTUwIDYyTDUwIDY4IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+'
  }

  return (
    <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-40">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 p-1">
                <img
                  src={natyImage}
                  alt="Naty Nutri"
                  className="w-full h-full rounded-full object-cover border-2 border-white"
                  onError={handleImageError}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                Nutri <span className="text-green-600">I.A</span>
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm flex items-center gap-1">
                <ChefHat className="w-3 h-3 sm:w-4 sm:h-4" />
                Com a nutri <span className="font-semibold text-green-700">Naty</span>
              </p>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="text-right">
                <p className="text-xs md:text-sm text-gray-600">Plano 100% Personalizado</p>
                <p className="text-xs md:text-sm text-green-600 font-semibold">Powered by AI</p>
              </div>
              <Apple className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
