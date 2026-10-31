import smart1 from '../assets/imagens/smart1.png'
import smart2 from '../assets/imagens/smart2.png'
import smart3 from '../assets/imagens/smart3.png'
import smart4 from '../assets/imagens/smart4.png'
import smart5 from '../assets/imagens/smart5.png'
import kayto from '../assets/imagens/Kayto.jpeg'
import andre from '../assets/imagens/andre.png'
import richard from '../assets/imagens/Richard.png'
import isabella from '../assets/imagens/Isabella.jpeg'
import nicholas from '../assets/imagens/Nicholas.jpeg'

export const menuLinks = [
  { href: '#solucao', label: 'A Solução' },
  { href: '#publico', label: 'Público-Alvo' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#equipe', label: 'Nossa Equipe' },
]

export const solucaoCards = [
  {
    titulo: 'O Problema',
    texto:
      'A câmera tradicional exige ajustes manuais constantes e não se adapta ao ambiente. Fotos de pessoas ficam desfocadas, pets em movimento borram, ambientes noturnos ficam escuros e materiais de estudo saem ilegíveis. Além disso, a interface cheia de bordas pretas pesadas torna a experiência pouco intuitiva e cansativa para o usuário comum.',
  },
  {
    titulo: 'Nossa Solução',
    texto:
      'A Smart Sense Cam é uma câmera inteligente com modo automático avançado. Ela reconhece o contexto da cena em tempo real e ajusta tudo sozinha, sem necessidade de ação do usuário. Possui também um modo manual para quem quer controle total e uma nova interface moderna com elementos translúcidos, mais leve, limpa e imersiva.',
  },
  {
    titulo: 'Como Funciona',
    texto:
      'É só apontar a câmera. O sistema identifica automaticamente se é pessoa, pet, ambiente noturno ou material de estudo e aplica os melhores ajustes de foco, iluminação e qualidade. No modo estudos, ainda extrai o texto da imagem e melhora a legibilidade para leitura e compartilhamento.',
  },
]

export const publicoCards = [
  {
    titulo: 'Usuários',
    texto:
      'Estudantes que fotografam cadernos e apostilas, criadores de conteúdo e famílias que fotografam pessoas e pets em movimento, além de usuários comuns que querem fotos noturnas de qualidade sem precisar entender de fotografia profissional.',
  },
  {
    titulo: 'Benefícios',
    texto:
      'Praticidade total sem ajustes manuais, fotos nítidas em qualquer cenário, extração de texto para estudos com legibilidade aprimorada, e uma experiência mais agradável graças à interface imersiva sem bordas pretas, garantindo fotos profissionais em um clique.',
  },
]

export const galeriaItens = [
  { src: smart1, alt: 'Imagem da solução', legenda: 'Inicio' },
  { src: smart2, alt: 'Interface do projeto', legenda: 'Camera' },
  { src: smart3, alt: 'Funcionamento do projeto', legenda: 'Funções' },
  { src: smart4, alt: 'Funcionamento do projeto', legenda: 'Noturna' },
  { src: smart5, alt: 'Funcionamento do projeto', legenda: 'ProMode' },
]

export const equipe = [
  { nome: 'Samuel Kayto Takiuchi', foto: kayto, alt: 'Samuel Kayto Takiuchi' },
  { nome: 'André Gonzales Bento', foto: andre, alt: 'André Gonzales Bento' },
  { nome: 'Richard Henrique', foto: richard, alt: 'Richard Henrique' },
  { nome: 'Isabella Rodrigues', foto: isabella, alt: 'Isabella Rodrigues' },
  { nome: 'Nicholas Franco', foto: nicholas, alt: 'Nicholas Franco' },
]
