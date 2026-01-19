import { createContext, useState, useCallback } from 'react'
import api from '../services/api'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    idade: '',
    peso: '',
    altura: '',
    atividade: 'sedentario',
    objetivo: 'emagrecer',
    genero: 'feminino'
  })

  const [loading, setLoading] = useState(false)
  const [plano, setPlano] = useState(null)
  const [imc, setImc] = useState(null)
  const [statusIMC, setStatusIMC] = useState('')
  const [showAnimation, setShowAnimation] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(null)

  const calcularIMC = useCallback(() => {
    if (formData.peso && formData.altura) {
      const alturaMetros = formData.altura / 100
      const imcCalculado = formData.peso / (alturaMetros * alturaMetros)
      setImc(imcCalculado.toFixed(1))

      if (imcCalculado < 18.5) setStatusIMC('Abaixo do peso')
      else if (imcCalculado < 25) setStatusIMC('Peso normal')
      else if (imcCalculado < 30) setStatusIMC('Sobrepeso')
      else setStatusIMC('Obesidade')
    }
  }, [formData.peso, formData.altura])

  const handleSubmit = async (e) => {
    if (e) e.preventDefault()

    setLoading(true)
    setShowAnimation(true)
    setError(null)

    try {
      const response = await api.gerarPlano(formData)

      if (response.success) {
        setPlano(response.plano)
        setImc(response.imc)
        setStatusIMC(response.statusIMC)
      } else {
        throw new Error(response.error || 'Erro ao gerar plano')
      }
    } catch (error) {
      console.error('Erro:', error)
      setError(error.message)
      alert(`Erro: ${error.message}`)
    } finally {
      setLoading(false)
      setTimeout(() => setShowAnimation(false), 1000)
    }
  }

  const handleDownload = () => {
    if (!plano) return

    const element = document.createElement("a")
    const file = new Blob([plano], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `plano-alimentar-${new Date().toISOString().split('T')[0]}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
    URL.revokeObjectURL(element.href)
  }

  const handleCopy = () => {
    if (!plano) return

    navigator.clipboard.writeText(plano)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(err => {
        console.error('Erro ao copiar:', err)
        const textArea = document.createElement('textarea')
        textArea.value = plano
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
  }

  const value = {
    formData,
    setFormData,
    loading,
    plano,
    imc,
    statusIMC,
    showAnimation,
    copied,
    error,
    calcularIMC,
    handleSubmit,
    handleDownload,
    handleCopy
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
