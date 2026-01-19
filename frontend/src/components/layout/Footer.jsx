import React from 'react'
import { ChefHat } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="mt-8 sm:mt-12 bg-white border-t border-green-100 py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
              <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-sm sm:text-base">Nutri I.A</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Sua nutri virtual inteligente</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-600 text-xs sm:text-sm">
              ⚠️ Este plano é uma recomendação gerada por IA.
              Consulte um nutricionista para orientação personalizada.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2026 Nutri I.A - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
