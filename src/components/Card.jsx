export default function Card({ titulo, texto }) {
  return (
    <article className="rounded-[10px] bg-white p-[30px] text-black shadow-[0_3px_10px_rgba(0,0,0,0.1)] transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
      <h3 className="mb-[15px] text-lg font-bold">{titulo}</h3>
      <p>{texto}</p>
    </article>
  )
}
