import React from 'react'

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-sm mx-4 animate-fade-in">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Gerando seu plano...</h3>
          <p className="text-gray-600 text-center text-sm">
            A IA está criando um plano alimentar personalizado para você.
            Isso pode levar alguns instantes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoadingOverlay
