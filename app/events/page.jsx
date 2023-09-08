'use client'

import Image from "next/image";
import style from './page.module.scss'
import photo1 from '@/src/assets/photo1.svg'
import photo2 from '@/src/assets/photo2.svg'
import photo3 from '@/src/assets/photo3.svg'
import photo4 from '@/src/assets/photo4.svg'
import photo5 from '@/src/assets/photo5.svg'
import DefaultLayout from "@/src/layouts/DefaultLayout";
import { useRef, useState } from "react";

export const metadata = {
  title: 'Eventos'
}

export default function Events(){
  const [photoModal,setPhotoModal] = useState('')
  const modalRef = useRef('')
  const photoRef = useRef('')

  function galery(ev){
    photoRef.current.src = ev.src
  }

  function modal(ev){
  setPhotoModal(ev)
  photoRef.current.src = ev.src
  modalRef.current.style.display = 'block'
  }

  function closeModal(ev){
  modalRef.current.style.display = 'none'
  }

  return(
    <DefaultLayout>
    <main className={style.main}>
      <div 
      className={style.modal}
      ref={modalRef}
      >
        <Image
        src={photoModal}
        alt="Photo Modal"
        width={900}
        />
        <p
        onClick={(ev)=>closeModal(ev.currentTarget)}
        >
          X
        </p>
      </div>
      <section className={style.content}>
        <h1>Festival kids</h1>
        <p>O Festival Kids do One Bit Food de Hamburguer e um evento beneficente ficticio que o restaurante One Bit Food esta organizando para proporcionar um dia de diversao, comida deliciosa e solidariedade para as criancas da comunidade. O evento tem como objetivo principal arrecadar fundos e doacoes para apoiar instituicoes locais que cuidam de criancas carentes.</p>
        <p>O festival sera um dia cheio de atividades emocionantes e saborosas para as criancas e suas familias desfrutarem. Algumas das principais atracoes do evento incluem:</p>
        <li>1. Oficina de Montagem de Hamburguer: As criancas terao a oportunidade de aprender a montar seus proprios hamburgueres deliciosos sob a orientacao dos chefs do One Bit Food. Isso nao apenas permitira que elas tenham uma experiencia pratica na cozinha, mas tambem estimulara sua criatividade ao escolher os ingredientes.</li>
        <li>2. Jogos e Atividades: Uma variedade de jogos divertidos, como corrida de saco, pula-pula, pintura facial e muito mais, sera organizada para manter as criancas entretidas durante todo o dia.</li>
        <li>3. Estacao de Sobremesas: Alem dos hamburgueres, havera uma estacao dedicada a sobremesas deliciosas, como milkshakes, sorvetes e cupcakes, que as criancas podem personalizar com coberturas coloridas.</li>
        <li>4. Palco de Entretenimento: O evento contara com apresentacoes ao vivo adequadas para criancas, como palhacos, magicos e artistas de balao, garantindo risadas e surpresas ao longo do dia.</li>
        <li>5. area de Doacoes: Para incentivar a solidariedade, o festival tera uma area de doacoes onde os participantes podem contribuir com roupas, brinquedos ou alimentos nao pereciveis, que serão destinados a instituicoes de caridade locais que cuidam de criancas necessitadas.</li>
        <li>6. Leilao Beneficente: Uma parte significativa dos recursos arrecadados vira de um leilao beneficente, no qual serão leiloados itens do restaurante, experiencias gastronimicas exclusivas e produtos doados por parceiros locais.</li>
        <p>O Festival Kids do One Bit Food busca unir a comunidade em torno de valores de generosidade, diversao e solidariedade, enquanto oferece um dia memoravel para as criancas. O restaurante One Bit Food esta comprometido em apoiar sua comunidade e fazer a diferenca na vida das criancas que mais precisam.</p>
      </section>

      <section className={style.photos}>
        <h1>Fotos do nosso ultimo evento</h1>
        <Image
        alt="principal"
        src={photo1}
        width={900}
        className={style.principal}
        layout="responsive"
        onClick={(ev)=>modal(ev.currentTarget)}
        ref={photoRef}
        />
        <div className={style.galery}>
          <Image
           alt="galery"
           src={photo2}
           width={200}
           layout="responsive"
           onClick={(ev)=>galery(ev.currentTarget)}
          />
          <Image
           alt="galery"
           src={photo3}
           width={200}
           layout="responsive"
          onClick={(ev)=>galery(ev.currentTarget)}
          />
          <Image
           alt="galery"
           src={photo4}
           width={200}
           layout="responsive"
           onClick={(ev)=>galery(ev.currentTarget)}
          />
          <Image
           alt="galery"
           src={photo5}
           width={200}
           layout="responsive"
            onClick={(ev)=>galery(ev.currentTarget)}
          />
        </div>
      </section>
    </main>
    </DefaultLayout>
  )
}