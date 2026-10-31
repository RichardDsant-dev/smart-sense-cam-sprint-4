import SectionTitle from './SectionTitle'
import { galeriaItens } from '../data/content'

export default function Galeria() {
  return (
    <section id="galeria" className="secao">
      <SectionTitle
        claro
        titulo="Galeria"
        subtitulo="Imagens e materiais relacionados ao desenvolvimento da nossa solução."
      />
      <div className="galeria-grid">
        {galeriaItens.map((item) => (
          <div key={item.legenda} className="galeriaanima">
            <figure>
              <img className="galeria-img" src={item.src} alt={item.alt} />
              <h3 className="subtitle">{item.legenda}</h3>
            </figure>
          </div>
        ))}
      </div>
    </section>
  )
}
