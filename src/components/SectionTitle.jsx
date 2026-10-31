export default function SectionTitle({ titulo, subtitulo, claro = false }) {
  return (
    <div className="titulo">
      <h2 className={claro ? 'cortext' : undefined}>{titulo}</h2>
      <h3 className={claro ? 'cortext2' : undefined}>{subtitulo}</h3>
    </div>
  )
}
