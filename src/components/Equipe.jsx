import SectionTitle from './SectionTitle'
import { equipe } from '../data/content'

export default function Equipe() {
  return (
    <section id="equipe" className="bg-white px-6 py-12 lg:px-[110px]">
      <SectionTitle
        titulo="Membros da Equipe"
        subtitulo="Conheça os integrantes que tornaram este projeto possível."
      />
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-5 min-[400px]:grid-cols-2 min-[650px]:grid-cols-3 min-[1100px]:grid-cols-5">
        {equipe.map((membro) => (
          <div
            key={membro.nome}
            className="flex flex-col items-center rounded-[10px] bg-[#f9f9f9] px-[25px] py-[35px] text-center transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            <div className="mb-[15px] h-[90px] w-[90px] shrink-0 overflow-hidden rounded-full bg-[#e0e0e0] transition duration-300 hover:scale-105">
              <img src={membro.foto} alt={membro.alt} className="h-full w-full object-cover" />
            </div>
            <h3 className="flex min-h-[38px] items-center text-base font-bold leading-tight text-black">
              {membro.nome}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
