import Image from "next/image";
import drink from '@/src/assets/kayra-sercan-oNqRZ7XKJHQ-unsplash__1_-removebg-preview.png'
import style from '../page.module.scss'
import cocoa from '@/src/assets/cocoa.svg'
import milk from '@/src/assets/milk.svg'
import syrup from '@/src/assets/syrup.svg'
import vegan from '@/src/assets/vegan.svg'
import chips from '@/src/assets/chips.svg'
import avatar1 from '@/src/assets/jake-nackos-IF9TK5Uy-KI-unsplash (1).jpg'
import avatar2 from '@/src/assets/leilani-angel-K84vnnzxmTQ-unsplash (1).jpg'
import avatar3 from '@/src/assets/michael-dam-mEZ3PoFGs_k-unsplash (1).jpg'
import emote from '@/src/assets/emote.svg'
import like from '@/src/assets/like.svg'
import DefaultLayout from "@/src/layouts/DefaultLayout";

export const metadata = {
  title: 'Drink'
}

export default function Drink(){
  return(
  <DefaultLayout>
  <main className={style.main}>
    <section className={style.header}>
    <Image
    alt="drink"
    src={drink}
    width={300}
    height={400}
    />
    <div>
      <h1>Virtual velvet</h1>
      <p>O Virtual Velvet e uma bebida quente e reconfortante, perfeita para os amantes do chocolate. e preparado com cacau premium e leite de amendoa, que combinam para criar um sabor rico e indulgente. Se desejar, pode ser adicionado um toque extra de sabor com xarope de canela. A generosa porcao de chantilly vegano no topo adiciona uma textura suave.</p>
    </div>
    </section>
    <section className={style.ingredients}>
    <h2>Ingredientes</h2>
    <div className={style.container}>
      <div>
        <Image
        alt="cocoa"
        src={cocoa}
        width={80}
        />
        <p>Cacau</p>
      </div>
      <div>
        <Image
        alt="milk"
        src={milk}
        width={80}
        />
        <p>Leite de amendoas</p>
      </div>
      <div>
        <Image
        alt="syrup"
        src={syrup}
        width={80}
        />
        <p>Xarope de canela</p>
      </div>
      <div>
        <Image
        alt="vegan"
        src={vegan}
        width={80}
        />
        <p>Chatilly vegano</p>
      </div>
      <div>
        <Image
        alt="chips"
        src={chips}
        width={80}
        />
        <p>Raspa de chocolate</p>
      </div>
    </div>  
    <p className={style.summary}>O Virtual Velvet e um coquetel reconfortante que une indulgencia e sabor em cada gole. Feito com ingredientes de alta qualidade, incluindo cacau premium e leite de amendoas, ele oferece uma experiencia rica e satisfatoria. O toque especial de xarope de canela adiciona um aroma acolhedor e um sabor aconchegante a bebida. O copo e adornado com uma generosa camada de chantilly vegano, proporcionando uma textura cremosa e suave que complementa perfeitamente o cacau. As raspas de chocolate amargo no topo sao a cereja do bolo, oferecendo uma decoracao elegante e um toque final de sabor. O &quotVirtual Velvet&quot e a escolha perfeita para quem procura um momento de indulgencia e conforto, envolvendo os sentidos em um abraco caloroso de sabores deliciosos.</p>
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
      <p className={style.coment}>O Virtual Velvet e uma experiencia que transcende a simples degustacao. Cada gole foi uma jornada sensorial completa. Desde a entrada suave ate a complexidade das notas de sabor que se desdobraram, senti como se estivesse decodificando um enigma gastronomico.</p>
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
      <p className={style.coment}>Como um fa incondicional de sobremesas, o Virtual Velvet foi uma revelacao para mim. A docura delicada e os tons suaves me lembraram instantaneamente do classico bolo red velvet. No entanto, o toque virtual trouxe uma dimensao totalmente nova ao sabor. Parecia que estava saboreando cada camada de um bolo perfeitamente.</p>
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
      <p className={style.coment}>O Virtual Velvet e como um sonho de realidade aumentada em forma liquida. Cada gole me transportou para um mundo de sabores que eu nunca poderia ter imaginado. Fiquei fascinada com a forma como as texturas e os gostos se fundiam, quase como se estivesse navegando por uma paisagem digital.</p>
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