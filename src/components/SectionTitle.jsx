export default function SectionTitle({ titulo, subtitulo, claro = false }) {
  return (
    <div className={`mb-[50px] text-center ${claro ? 'text-white' : 'text-black'}`}>
      <h2 className="mb-2.5 text-3xl font-bold sm:text-4xl">{titulo}</h2>
      <h3 className="text-lg font-bold">{subtitulo}</h3>
    </div>
  )
}
