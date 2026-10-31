export default function Card({ titulo, texto }) {
  return (
    <article className="card">
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </article>
  )
}
