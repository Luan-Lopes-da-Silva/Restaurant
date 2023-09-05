import style from './page.module.scss'
import hamburguer from '@/src/assets/hamburguer 1.svg'
import vegan from '@/src/assets/Vector.svg'
import twoMeats from '@/src/assets/Group 23.svg'
import threeMeats from '@/src/assets/Group 26.svg'
import Image from 'next/image'
import ham1 from '@/src/assets/vegan1.svg'
import ham2 from '@/src/assets/vegan2.svg'
import ham3 from '@/src/assets/vegan3.svg'
import ham4 from '@/src/assets/vegan4.svg'
import Link from 'next/link'
import DefaultLayout from '@/src/layouts/DefaultLayout'

export const metadata = {
title: 'Home'
}

export default function Home() {
  return (
    <DefaultLayout>
    <main>
      <section className={style.header}>
      <div className={style.bg}></div>  
      <h1>What is lorem ipsum</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ....</p>
      <button><Link href={'/events'}>see more</Link></button>
      </section>
      <section className={style.menu}>
        <h2>Our Menu</h2>
        <div className={style.buttons}>
          <button>
          <Image
          alt='Default'
          src={hamburguer}
          />
          <p>Default</p>
          </button>
          <button>
          <Image
          alt='2 meats'
          src={twoMeats}
          />
          <p>2 meats</p>
          </button>
          <button>
          <Image
          alt='3 meats'
          src={threeMeats}
          />
          <p>3 meats</p>
          </button>
          <button>
          <Image
          alt='Vegan'
          src={vegan}
          />
          <p>vegan</p>
          </button>
        </div>

        <div className={style.card}>
          <Image
          alt='ham'
          src={ham1}
          width={100}
         
          />
          <div className={style.infos}>
            <h3>Pixel veggie delight</h3>
            <p>Para os amantes de hamburgueres vegetarianos, o Pixel Veggie Delight e uma obra-prima de sabor e textura. Um hamburguer de grao-de-bico e cogumelos, levemente temperado...</p>
            <button><Link href={'/products/hamburguer'}>See details</Link></button>
          </div>
        </div>
        <div className={style.card}>
          <Image
          alt='ham'
          src={ham2}
          width={100}
          height={130}
          />
          <div className={style.infos}>
            <h3>Green Circuit Burger</h3>
            <p>O Green Circuit Burger e um tributo a natureza e ao sabor autentico dos vegetais. Apresentando um hamburguer de grao-de-bico e espinafre...</p>
            <button><Link href={'/products/hamburguer'}>See details</Link></button>
          </div>
        </div>
        <div className={style.card}>
          <Image
          alt='ham'
          src={ham3}
          width={100}
          height={130}
          />
          <div className={style.infos}>
            <h3>Savory Byte Burger</h3>
            <p>O Savory Byte Burger oferece uma experiencia saborosa e repleta de proteInas vegetais. Um hamburguer a base de feijao-preto e...</p>
            <button><Link href={'/products/hamburguer'}>See details</Link></button>
          </div>
        </div>
        <div className={style.card}>
          <Image
          alt='ham'
          src={ham4}
          width={100}
          height={130}
          />
          <div className={style.infos}>
            <h3>Zen Zenith</h3>
            <p>O Zen Zenith Burger proporciona um equilibrio harmonioso de sabores e ingredientes frescos. Este hamburguer comeca com uma base de quinoa e lentilhas, combinando textura...</p>
            <button><Link href={'/products/hamburguer'}>See details</Link></button>
          </div>
        </div>
      </section>
    </main>
    </DefaultLayout>
  )
}
