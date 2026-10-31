import bannerCamera from '../assets/imagens/banner-camera.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2 className="main-txt">Uma solução para um grande desafio</h2>
        <p className="main-txt2">
          Conheça nossa solução desenvolvida para a Challenge e descubra como ela
          pode ajudar a resolver um problema de forma prática, tecnológica e eficiente.
        </p>
        <a href="#solucao" className="botao">Conheça a solução</a>
      </div>
      <div className="hero-image">
        <img src={bannerCamera} alt="Imagem representando a solução" />
      </div>
    </section>
  )
}
