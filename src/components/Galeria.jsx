import SectionTitle from './SectionTitle'
import { galeriaItens } from '../data/content'

export default function Galeria() {
  return (
    <section id="galeria" className="bg-[#111] px-6 py-12 lg:px-[110px]">
      <SectionTitle
        claro
        titulo="Galeria"
        subtitulo="Imagens e materiais relacionados ao desenvolvimento da nossa solução."
      />
      <div className="mx-auto grid max-w-[1300px] grid-cols-2 gap-5 pb-12 sm:grid-cols-3 lg:grid-cols-5">
        {galeriaItens.map((item, i) => {
          const ultimo = i === galeriaItens.length - 1
          return (
            <figure
              key={item.legenda}
              className={`group ${i % 2 === 1 ? 'lg:translate-y-10' : ''} ${
                ultimo ? 'max-sm:col-span-2 max-sm:mx-auto max-sm:w-1/2' : ''
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-[4/5] w-full rounded-[10px] object-cover shadow-[0_3px_10px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition duration-300 group-hover:scale-105"
              />
              <figcaption className="mt-3 text-center font-bold text-white">{item.legenda}</figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
