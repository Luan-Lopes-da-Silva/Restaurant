import Image from "next/image";
import ham from '@/src/assets/mike-PxJ9zkM2wdA-unsplash__2_-removebg-preview.png'
import style from '../page.module.scss'
import bacon from '@/src/assets/bacon.svg'
import bread from '@/src/assets/bread.svg'
import cheese from '@/src/assets/cheese.svg'
import condiments from '@/src/assets/condiments.svg'
import lettuce from '@/src/assets/lettuce.svg'
import onion from '@/src/assets/onion.svg'
import tomatoes from '@/src/assets/tomatoes.svg'
import avatar1 from '@/src/assets/jake-nackos-IF9TK5Uy-KI-unsplash (1).jpg'
import avatar2 from '@/src/assets/leilani-angel-K84vnnzxmTQ-unsplash (1).jpg'
import avatar3 from '@/src/assets/michael-dam-mEZ3PoFGs_k-unsplash (1).jpg'
import emote from '@/src/assets/emote.svg'
import like from '@/src/assets/like.svg'
import DefaultLayout from "@/src/layouts/DefaultLayout";

export const metadata = {
  title: 'Hamburguer'
}

export default function Hamburguer(){
  return(
  <DefaultLayout>
  <main className={style.main}>
    <section className={style.header}>
    <Image
    alt="hamburguer"
    src={ham}
    layout="responsive"
    />
    <div>
      <h1>Pixel Veggie Delight</h1>
      <p>Para os amantes de hamburgueres vegetarianos, o Pixel Veggie Delight e uma obra-prima de sabor e textura. Um hamburguer de grao-de-bico e cogumelos, levemente temperado, e grelhado ate ficar dourado e colocado sobre um pao integral macio. Camadas de abacate cremoso, cebola roxa crocante, tomate fresco e rucula sao cuidadosamente dispostas.</p>
    </div>
    </section>
    <section className={style.ingredients}>
    <h2>Ingredientes</h2>
    <div className={style.container}>
      <div>
        <Image
        alt="cheese"
        src={cheese}
        width={80}
        />
        <p>Queijo</p>
      </div>
      <div>
        <Image
        alt="onion"
        src={onion}
        width={80}
        />
        <p>Cebolas</p>
      </div>
      <div>
        <Image
        alt="bacon"
        src={bacon}
        width={80}
        />
        <p>Bacon</p>
      </div>
      <div>
        <Image
        alt="tomatoes"
        src={tomatoes}
        width={80}
        />
        <p>Tomates</p>
      </div>
      <div className={style.condiment}>
        <Image
        alt="condiments"
        src={condiments}
        width={80}
        />
        <p>Condimentos</p>
      </div>
      <div>
        <Image
        alt="lettuce"
        src={lettuce}
        width={80}
        />
        <p>Alface</p>
      </div>
      <div>
        <Image
        alt="bread"
        src={bread}
        width={80}
        />
        <p>Pao Caseiro</p>
    </div>
    </div>  
    <p className={style.summary}>Uma constelacao de queijos raros derrete sobre a carne, liberando notas de sabores que variam de um picante vulcanico a um suave frescor de cometa. Uma chuva de molho especial  uma combinacao de condimentos exoticos coletados nos confins do universo, acrescenta um toque de docura celestial com um toque picante de estrelas cadentes.
    Camadas de alface lunar, crocante como a superficie da lua, se misturam harmoniosamente com fatias de tomate cosmico, colhidas nas estufas flutuantes de Marte. Cebolas caramelizadas pelo calor das estrelas e pedacos de bacon provenientes de asteroides defumados proporcionam textura e sabor irresistiveis.
    E, para completar essa jornada culinaria, o pao cosmico inferior é habilmente espalhado com uma generosa porcao de maionese de alho negro, criando uma simbiose de sabores que se assemelha  a orbita sincronizada de planetas distantes.</p>
    </section>
    <section className={style.fbs}>
    <h2>Feedbacks</h2>
    <article>
      <header>
        <Image
        alt="avatar"
        src={avatar1}
        width={50}
        height={50}
        />
        <h5>Clara A</h5>
      </header>
      <p className={style.coment}>O Pixel Veggie Delight e simplesmente incrivel! Eu nunca imaginei que um hamburguer vegetariano pudesse ser tao cheio de sabor e textura. A combinacao de grao-de-bico, cogumelos e os vegetais frescos e uma verdadeira obra-prima. Cada mordida e um verdadeiro deleite para o paladar.</p>
      <footer>
      <Image
      alt="emote"
      src={emote}
      width={30}
      />
      <div className={style.likes}>
      <Image
      alt="like"
      src={like}
      width={30}
      />
      <p>4</p>  
      </div>  
      <p>|</p>
      <p>1 hour ago</p>
      </footer>
    </article>

    <article>
      <header>
        <Image
        alt="avatar"
        src={avatar2}
        width={50}
        height={50}
        />
        <h5>miguel s</h5>
      </header>
      <p className={style.coment}>Eu nao sou vegetariano, mas o Pixel Veggie Delight me fez repensar isso! Esse hamburguer e uma explosao de sabores saudaveis. A mistura de abacate cremoso, cebola roxa e o molho de iogurte de ervas me deixou impressionado. Definitivamente, uma opcao deliciosa para quem quer algo mais leve e saboroso.</p>
      <footer>
      <Image
      alt="emote"
      src={emote}
      width={30}
      />
      <div className={style.likes}>
      <Image
      alt="like"
      src={like}
      width={30}
      />
      <p>8</p>  
      </div>  
      <p>|</p>
      <p>1 day ago</p>
      </footer>
    </article>

    <article>
      <header>
        <Image
        alt="avatar"
        src={avatar3}
        width={50}
        height={50}
        />
        <h5>isabella m</h5>
      </header>
      <p className={style.coment}>Como vegana, sempre estou em busca de opcoes saborosas e nutritivas. O Pixel Veggie Delight nao apenas atendeu, mas tambem superou minhas expectativas! A combinacao de sabores e a escolha dos ingredientes sao simplesmente perfeitas. Esse hamburguer e o equilibrio ideal entre indulgencia e saude.</p>
      <footer>
      <Image
      alt="emote"
      src={emote}
      width={30}
      />
      <div className={style.likes}>
      <Image
      alt="like"
      src={like}
      width={30}
      />
      <p>2</p>  
      </div>  
      <p>|</p>
      <p>3 days ago</p>
      </footer>
    </article>
    </section>
  </main>
  
  </DefaultLayout>
  )
}