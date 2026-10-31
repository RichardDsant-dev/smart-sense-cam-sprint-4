import Header from './components/Header'
import Hero from './components/Hero'
import Solucao from './components/Solucao'
import PublicoAlvo from './components/PublicoAlvo'
import Galeria from './components/Galeria'
import Equipe from './components/Equipe'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solucao />
        <PublicoAlvo />
        <Galeria />
        <Equipe />
      </main>
      <Footer />
    </>
  )
}
