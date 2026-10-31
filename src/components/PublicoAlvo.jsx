import SectionTitle from './SectionTitle'
import Card from './Card'
import { publicoCards } from '../data/content'

export default function PublicoAlvo() {
  return (
    <section id="publico" className="bg-white px-6 py-12 lg:px-[110px]">
      <SectionTitle
        titulo="Público-Alvo"
        subtitulo="Nossa solução foi desenvolvida pensando nas pessoas que mais podem se beneficiar dela."
      />
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-[30px] sm:grid-cols-2">
        {publicoCards.map((card) => (
          <Card key={card.titulo} {...card} />
        ))}
      </div>
    </section>
  )
}
