import { menuLinks } from '../data/content'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1 className="começo">CHALLENGE</h1>
      </div>
      <nav className="menu">
        {menuLinks.map((link) => (
          <a key={link.href} className="menu-link" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
