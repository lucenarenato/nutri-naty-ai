import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import PlanoForm from './components/plano/PlanoForm'
import ResultadoPlano from './components/plano/ResultadoPlano'
import DicasNutri from './components/plano/DicasNutri'
import LoadingOverlay from './components/ui/LoadingOverlay'
import ParticleEffect from './components/ui/ParticleEffect'
import './App.css'

function App() {
  const { loading, showAnimation } = useContext(AppContext)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Header />

      <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <PlanoForm />
            <DicasNutri />
          </div>

          <div>
            <ResultadoPlano />
          </div>
        </div>
      </main>

      <Footer />

      {loading && <LoadingOverlay />}
      {showAnimation && <ParticleEffect />}
    </div>
  )
}

export default App
