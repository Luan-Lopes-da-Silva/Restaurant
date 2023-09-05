import Image from "next/image";
import test from '@/src/assets/test.svg'
import hamburguer from '@/src/assets/hamburguer2.svg'
import drink from '@/src/assets/drink.svg'
import img2 from '@/src/assets/img2.svg'
import img3 from '@/src/assets/img3.svg'
import img4 from '@/src/assets/img4.svg'
import img5 from '@/src/assets/img5.svg'
import img6 from '@/src/assets/img6.svg'
import img7 from '@/src/assets/img7.svg'
import img8 from '@/src/assets/img8.svg'
import style from './page.module.scss'
import DefaultLayout from "@/src/layouts/DefaultLayout";

export const metadata = {
  title: 'Nosso Menu'
}

export default function Menu(){
  return(
    <DefaultLayout>
    <main className={style.main}>
      <h1>Nosso menu</h1>
      <section className={style.container}>
        <div className={style.header}>
          <Image
          alt="hamburguer"
          src={hamburguer}
          width={30}
          />
          <h3>Hamburguers</h3>
        </div>

        <div className={style.cards}>
          <article>
            <h2>.01 pixel veggie delight</h2>
            <div className={style.content}>
              <Image
              alt="ham1"
              src={test}
              width={320}
              />
              <p>Para os amantes de hamburgueres vegetarianos, o Pixel Veggie Delight e uma obra-prima de sabor...</p>
              <button><p>See details</p></button>
            </div>
          </article>
          <article>
            <h2>.02 green circuit burguer</h2>
            <div className={style.content}>
              <Image
              alt="ham2"
              src={img2}
              width={320}
              />
              <p>O Green Circuit Burger e um tributo a natureza e ao sabor autentico dos vegetais...</p>
              <button><p>See details</p></button>
            </div>
          </article>
          <article>
            <h2>.03 savory byte burguer</h2>
            <div className={style.content}>
              <Image
              alt="ham3"
              src={img3}
              width={320}
              />
              <p>O Savory Byte Burger oferece uma experiencia saborosa e repleta de proteInas vegetais...</p>
              <button><p>See details</p></button>
            </div>
          </article>
          <article>
            <h2>.04 zen zenith burguer</h2>
            <div className={style.content}>
              <Image
              alt="ham4"
              src={img4}
              width={320}
              />
              <p>O Zen Zenith Burger proporciona um equilibrio harmonioso de sabores e ingredientes frescos...</p>
              <button><p>See details</p></button>
            </div>
          </article>
        </div>
      </section>

      <section className={style.container}>
      <div className={style.header}>
          <Image
          alt="drink"
          src={drink}
          width={30}
          />
          <h3>Bebidas</h3>
        </div>
        <div className={style.cards}>
            <article>
                <h2>.01 binary bliss <span>11%</span></h2>
              <div className={style.content}>
                <Image
                alt="drink1"
                src={img5}
                width={320}
                />
                <p>O Binary Bliss e uma fusao refrescante de sabores frutados e notas citricas...</p>
                <button><p>See details</p></button>
              </div>
            </article>
            <article>
              <h2>.02 pixel punch <span>17%</span></h2>
              <div className={style.content}>
                <Image
                alt="drink2"
                src={img6}
                width={320}
                />
                <p>O Pixel Punch e um coquetel tropical que transporta os sentidos para uma ilha paradisiaca...</p>
                <button><p>See details</p></button>
              </div>
            </article>
            <article>
              <h2>.03 byte breeze <span>05%</span></h2>
              <div className={style.content}>
                <Image
                alt="drink3"
                src={img7}
                width={320}
                />
                <p>O Byte Breeze e um drink elegante que combina a suavidade do cha verde com a vivacidade das frutas vermelhas...</p>
                <button><p>See details</p></button>
              </div>
            </article>
            <article>
              <h2>.04 virtual velvet <span>07%</span></h2>
              <div className={style.content}>
                <Image
                alt="drink4"
                src={img8}
                width={320}
                />
                <p>O Virtual Velvet e uma criacao indulgente e reconfortante, perfeita para os amantes do chocolate...</p>
                <button><p>See details</p></button>
              </div>
            </article>
          </div>
      </section>
    </main>
    </DefaultLayout>
  )
}