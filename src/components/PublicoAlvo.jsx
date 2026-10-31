import SectionTitle from './SectionTitle'
import Card from './Card'
import { publicoCards } from '../data/content'

export default function PublicoAlvo() {
  return (
    <section id="publico" className="secao2">
      <SectionTitle
        titulo="Público-Alvo"
        subtitulo="Nossa solução foi desenvolvida pensando nas pessoas que mais podem se beneficiar dela."
      />
      <div className="publico-grid">
        {publicoCards.map((card) => (
          <Card key={card.titulo} {...card} />
        ))}
      </div>
    </section>
  )
}
