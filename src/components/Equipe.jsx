import SectionTitle from './SectionTitle'
import { equipe } from '../data/content'

export default function Equipe() {
  return (
    <section id="equipe" className="secao2">
      <SectionTitle
        titulo="Membros da Equipe"
        subtitulo="Conheça os integrantes que tornaram este projeto possível."
      />
      <div className="equipe-cards">
        {equipe.map((membro) => (
          <div key={membro.nome} className="card-equipe">
            <div className="foto">
              <img src={membro.foto} alt={membro.alt} />
            </div>
            <h3>{membro.nome}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
