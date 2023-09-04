import qrCode from '@/src/assets/qr_code_FILL0_wght400_GRAD0_opsz48.svg'
import Image from 'next/image'
import style from './page.module.scss'
import img1 from '@/src/assets/sebastian-coman-photography-eBmyH7oO5wY-unsplash (1).jpg'
import img2 from '@/src/assets/alex-haney-CAhjZmVk5H4-unsplash.jpg'
import img3 from '@/src/assets/fabrizio-magoni-boaDpmC-_Xo-unsplash.jpg'
import img4 from '@/src/assets/pylyp-sukhenko-y-XZf_TNRms-unsplash 1.jpg'
import img5 from '@/src/assets/syed-ahmad-kgjQ1AGDwE0-unsplash.jpg'
import img6 from '@/src/assets/elevate-iv6yNy7oBqQ-unsplash.jpg'
import img7 from '@/src/assets/k8-sWEpcc0Rm0U-unsplash.jpg'
import img8 from '@/src/assets/jason-leung-poI7DelFiVA-unsplash.jpg'
import img9 from '@/src/assets/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash (1).jpg'
import img10 from '@/src/assets/sebastian-coman-photography-eBmyH7oO5wY-unsplash (1).jpg'
import img12 from '@/src/assets/chino-rocha-X52UzrosyDs-unsplash (1).jpg'
import img13 from '@/src/assets/microsoft-365-kTFmwxkF5bQ-unsplash (1).jpg'
import img14 from '@/src/assets/mathew-schwartz-GjzJFMnJZYg-unsplash (1).jpg'
import img15 from '@/src/assets/qui-nguyen-cnTdKzMOBns-unsplash (1).jpg'
import img16 from '@/src/assets/jason-leung-poI7DelFiVA-unsplash.jpg'
import search from '@/src/assets/search.svg'

export default function About(){
  return(
    <>
    <main className={style.main}>
      <section className={style.about}>
      <h1>Sobre nos</h1>
      <p>Bem-vindo ao One Bit Food, o restaurante pioneiro que combina a arte da culinaria com a realidade virtual para criar uma experiencia gastronomica unica e imersiva. Aqui, nossos clientes nao apenas desfrutam de pratos deliciosos, mas tambem mergulham em mundos virtuais que correspondem aos sabores de suas refeicoes.</p>
      <p>Mudamos nossos ambientes virtuais regularmente para oferecer experiencias tematicas unicas. De jantares a luz de velas em um castelo medieval a almocos tropicais em uma ilha paradisiaca, cada visita ao One Bit Food e uma jornada sensorial totalmente nova.
      </p>
      <p>Reservas Limitadas para uma Exclusividade Extraordinaria
      Devido a natureza inovadora e personalizada de nossa experiencia, aceitamos um numero limitado de reservas por noite. Isso garante que cada cliente receba atencao individualizada e possa mergulhar plenamente em nossa combinacao úunica de gastronomia e realidade virtual.</p>
      </section>

      <section className={style.space}>
        <h2>Nosso espaco</h2>
        <p>O One Bit Food apresenta uma decoracao moderna e minimalista, com tons de preto, branco e acentos em neon. O espaco e projetado para criar uma atmosfera futuristica e convidativa ao mesmo tempo. As mesas sao equipadas com suportes para headsets de realidade virtual, permitindo aos clientes mergulhar na experiencia completa.</p>
        <p>Nosso espaco ainda conta com um facilitador muito grande no caso do cliente nao querer pegar o menu fisico ou em caso de comodidade mesmo, o cliente tem tanto a opcao de pegar o qr code impresso exclusivamente em cada mesa do nosso restaurante ou o qr code presente em nosso site tambem.</p>
        <div className={style.table}>
          <p>Mesa</p>
          <div className={style.menu}>
            <Image
            alt='Qr Code'
            src={qrCode}
            />
            <h4>MENU</h4>
          </div>
        </div>
        <div className={style.photos}>
          <Image
          alt='img'
          src={img1}
          width={100}
          height={150}
          />
          <Image
          alt='img2'
          src={img2}
          width={100}
          height={150}
          />
          <Image
          alt='img3'
          width={100}
          height={150}
          src={img3}
          />
          <Image
          alt='img4'
          width={100}
          height={150}
          src={img4}
          />
          <Image
          alt='img5'
          width={100}
          height={150}
          src={img5}
          />
          <Image
          alt='img6'
          width={100}
          height={150}
          src={img6}
          />
          <Image
          alt='img7'
          width={100}
          height={150}
          src={img7}
          />
          <Image
          alt='img8'
          width={100}
          height={150}
          src={img8}
          />
        </div>
      </section>

      <section className={style.employees}>
        <h2>Nossos funcionarios</h2>
      <div className={style.employee}>
        <h3>Sophia mendes - chef executiva</h3>
        <Image
        alt='chef'
          width={1200}
          height={600}
          src={img9}
        />
        <p>Sophia Mendes e a mente criativa por tras do One Bit Food. Como Chef Executiva, ela fundiu sua paixao pela culinaria com seu amor pela tecnologia para criar um espaco onde os sabores sao aprimorados por experiencias virtuais imersivas. Sophia acredita que a comida e uma forma de arte e expressao, e ela lidera sua equipe na criacao de pratos que contam historias unicas.</p>
      </div>
      <div className={style.employees}>
        <h3>Diego vega - chef de inovacao gastronomica</h3>
        <Image
         alt='chef'
         src={img10} 
         width={1200}
          height={600}
        />
        <p>Diego Vega e o Chef de Inovacao Gastronomica do One Bit Food. Com um historico diversificado em cozinhas de todo o mundo, ele traz uma abordagem inovadora a culinaria tradicional. Diego e responsavel por criar pratos que se conectam perfeitamente com os ambientes virtuais, garantindo uma experiencia completa para os clientes.</p>
      </div>
      <div className={style.employees}>
        <h3>Lara Fernandes - diretora de tecnologia imersiva</h3>
        <Image/>
        <p>Lara Fernandes lidera a equipe de tecnologia do One Bit Food. Como Diretora de Tecnologia Imersiva, ela trabalha em estreita colaboracao com os chefs para sincronizar as experiencias virtuais com as refeicoes. Sua habilidade em criar ambientes virtuais que complementam os sabores é fundamental para a magia do restaurante.</p>
      </div>
      <div className={style.employees}>
        <h3>Carlos silva - bartender</h3>
        <Image
         alt='chef'
         src={img12}
         width={1200}
          height={600}
        />
        <p>Carlos Silva e o mestre por tras do bar do One Bit Food. Com um dom para criar coqueteis que sao verdadeiras obras de arte visuais, ele eleva a experiencia de beber a um novo patamar. Carlos e conhecido por sua criatividade na mistura de ingredientes e projecoees holograficas para criar coqueteis que sao uma atracao por si so.</p>
      </div>
      <div className={style.employees}>
        <h3>Eva almeida - coordenadora de experiencia do cliente</h3>
        <Image
         alt='chef'
         src={img13}
         width={1200}
          height={600}
        />
        <p>Eva Almeida e a Coordenadora de Experiencia do Cliente, garantindo que cada visitante do One Bit Food tenha uma experiencia excepcional. Ela lidera a equipe de garcons treinados para guiar os clientes pela jornada culinaria, respondendo a perguntas e garantindo que cada detalhe seja perfeito.</p>
      </div>
      </section>

      <section className={style.units}>
        <h2>Nossas unidades</h2>
        <div className={style.container}>
          <div className={style.unit}>
            <h4>Praia serena</h4>
            <Image
            alt='unity'
            src={img14}
            width={150}
            height={200}
            />
            <button>
              <p>Ver mais</p>
              <Image
              alt='search'
              src={search}
              width={16}
              />
            </button>
          </div>
          <div className={style.unit}>
            <h4>Cidade vanguarda</h4>
            <Image
             alt='unity'
             src={img15}
             width={150}
            height={200}
            />
            <button>
              <p>Ver mais</p>
              <Image
              alt='search'
              src={search}
              width={16}
              />
            </button>
          </div>
          <div className={style.unit}>
            <h4>Metropole futura</h4>
            <Image
             alt='unity'
             src={img16}
             width={150}
            height={200}
            />
            <button>
              <p>Ver mais</p>
              <Image
              alt='search'
              src={search}
              width={16}
              />
            </button>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}