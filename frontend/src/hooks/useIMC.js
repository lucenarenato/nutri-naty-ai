import { useCallback } from 'react'

export const useIMC = () => {
  const calculateIMC = useCallback((peso, altura) => {
    if (!peso || !altura) return null

    const alturaMetros = altura / 100
    return peso / (alturaMetros * alturaMetros)
  }, [])

  const getStatusIMC = useCallback((imc) => {
    if (!imc) return ''
    if (imc < 18.5) return 'Abaixo do peso'
    if (imc < 25) return 'Peso normal'
    if (imc < 30) return 'Sobrepeso'
    return 'Obesidade'
  }, [])

  const getIMCColor = useCallback((imc) => {
    if (!imc) return 'bg-gray-100 text-gray-800'
    if (imc < 18.5) return 'bg-blue-100 text-blue-800'
    if (imc < 25) return 'bg-green-100 text-green-800'
    if (imc < 30) return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }, [])

  return {
    calculateIMC,
    getStatusIMC,
    getIMCColor
  }
}
