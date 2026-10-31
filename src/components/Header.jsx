import { menuLinks } from '../data/content'

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4 border-b border-white/10 bg-[#080a0e] px-5 py-4 text-center text-white min-[900px]:flex-row min-[900px]:justify-between min-[900px]:px-[8%]">

      <div>
        <h1 className="inline-block shrink-0 text-2xl font-bold transition duration-300 hover:scale-105">
          CHALLENGE
        </h1>
      </div>

      <nav className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 min-[900px]:w-auto min-[900px]:gap-x-[25px]">
        {menuLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="py-1 text-sm font-semibold text-white transition-colors hover:text-[#00aaff] sm:text-base"
          >
            {link.label}
          </a>
        ))}
      </nav>

    </header>
  )
}
