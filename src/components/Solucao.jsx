import SectionTitle from './SectionTitle'
import Card from './Card'
import { solucaoCards } from '../data/content'

export default function Solucao() {
  return (
    <section id="solucao" className="secao">
      <SectionTitle
        claro
        titulo="A Solução"
        subtitulo="Entenda o problema identificado e como nossa solução busca resolvê-lo."
      />
      <div className="grid-solucao">
        {solucaoCards.map((card) => (
          <Card key={card.titulo} {...card} />
        ))}
      </div>
    </section>
  )
}
