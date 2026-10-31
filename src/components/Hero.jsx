import bannerCamera from '../assets/imagens/banner-camera.jpg'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#0d1117] text-white"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-6 px-6 py-8 sm:px-10 min-[900px]:min-h-[calc(100svh-5rem)] min-[900px]:grid-cols-[1.05fr_0.95fr] min-[900px]:gap-10 min-[900px]:px-[8%] min-[900px]:py-10">

        <div className="relative z-10 mx-auto w-full max-w-[620px] min-[900px]:mx-0">
          <h1 className="mb-7 font-bold leading-[1.08] tracking-tight">
            <span className="block text-[clamp(2.8rem,6vw,5.5rem)]">
              Uma solução
            </span>

            <span className="mt-2 block text-[clamp(2rem,4.2vw,3.5rem)] text-[#00aaff]">
              para um grande desafio
            </span>
          </h1>

          <p className="mb-8 max-w-[500px] text-base leading-relaxed text-gray-300 sm:text-lg">
            Conheça nossa solução desenvolvida para a Challenge e descubra como ela pode ajudar a
            resolver um problema de forma prática, tecnológica e eficiente.
          </p>

          <a
            href="#solucao"
            className="inline-block rounded-[5px] bg-[#00aaff] px-7 py-3.5 font-semibold text-[#111] transition duration-300 hover:-translate-y-0.5 hover:bg-[#33bbff]"
          >
            Conheça a solução
          </a>
        </div>

        <div className="relative flex min-h-[280px] items-center justify-center sm:min-h-[360px] min-[900px]:min-h-[500px] min-[900px]:justify-end">

          <div className="absolute right-0 top-[15%] h-[72%] w-[88%] bg-[#173a7a] min-[900px]:right-[-2%] min-[900px]:top-[12%] min-[900px]:h-[76%] min-[900px]:w-[95%]" />

          <img
            src={bannerCamera}
            alt="Mão segurando um celular, representando a solução Smart Sense Cam"
            className="relative z-10 mx-auto w-full max-w-[440px] object-contain sm:max-w-[500px] min-[900px]:mr-[-4%] min-[900px]:max-w-[600px]"
          />
        </div>

      </div>
    </section>
  )
}