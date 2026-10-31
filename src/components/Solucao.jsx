import SectionTitle from './SectionTitle'
import Card from './Card'
import { solucaoCards } from '../data/content'

export default function Solucao() {
  return (
    <section id="solucao" className="bg-[#173a7a] px-6 py-12 lg:px-[110px]">
      <SectionTitle
        claro
        titulo="A Solução"
        subtitulo="Entenda o problema identificado e como nossa solução busca resolvê-lo."
      />
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-[25px] sm:grid-cols-2 lg:grid-cols-3">
        {solucaoCards.map((card) => (
          <Card key={card.titulo} {...card} />
        ))}
      </div>
    </section>
  )
}
