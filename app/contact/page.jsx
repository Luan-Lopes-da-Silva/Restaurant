import Image from "next/image";
import style from './page.module.scss'
import send from '@/src/assets/send.svg'
import DefaultLayout from "@/src/layouts/DefaultLayout";

export const metadata = {
  title: 'Contate-Nos'
}

export default function Contact(){
  return(
    <DefaultLayout>
    <main className={style.main}>
      <h2>Nos contate</h2>
      <section className={style.container}>
        <article>
          <h4>Unidade 1 - Praia serena</h4>
          <li>.Rua das ondas praia serena, 456</li>
          <li>.Bitville</li>
          <li>.Beach@onebitfood.com</li>
          <li>.(555) 123-4567</li>
        </article>
        <article>
          <h4>Unidade 2 - Metropole futura</h4>
          <li>.rUA neo tech, Metropole futura, 789</li>
          <li>.Bitville</li>
          <li>.techpark@onebitfood.com</li>
          <li>.(555) 123-4567</li>
        </article>
        <article>
          <h4>Unidade 3 - Cidade vanguarda</h4>
          <li>.avenida inovacao, cidade vanguarda, 123</li>
          <li>.cidade vanguarda</li>
          <li>.gardenia@onebitfood.com</li>
          <li>.(555) 123-4567</li>
        </article>
      </section>

      <section className={style.support}>
        <h2>Suporte 24 hrs</h2>
        <p>No One Bit Food, nosso compromisso com a excelEncia se estende alEm dos sabores irresistIveis que oferecemos. Apresentamos o nosso serviCo de suporte online via email, criado para tornar sua experiEncia conosco ainda mais suave e satisfatOria.
        Queremos estar sempre ao seu alcance, pronto para responder a qualquer dUvida, comentArio ou sugestAo que vocE possa ter. Nosso serviCo de suporte online via email E uma maneira conveniente e eficiente de se conectar conosco. Se vocE precisa de informaCOes sobre nosso menu diversificado, horArio de funcionamento ou opCOes de reserva, nossa equipe de suporte estA pronta para ajudar.
        Basta enviar um email para support@onebitfood.com e nossa equipe comprometida responderA prontamente, garantindo que todas as suas necessidades sejam atendidas da melhor forma possIvel. No One Bit Food, a satisfaCAo do cliente E nossa prioridade, e nosso suporte online via email E mais uma maneira de reforCarmos esse compromisso.</p>
      </section>

      <section className={style.form}>
        <h3>Formulario</h3>
        <form>
          <label htmlFor="name">Nome</label>
          <input 
          type="text" 
          placeholder="JOHN DOE"
          name=""
          />
          <label htmlFor="subject">Assunto</label>
          <input type="text" placeholder="POSSIVEIS MELHORIAS NO SERVICO" name="subject"/>
          <label htmlFor="msg">Mensagem</label>
          <textarea placeholder="GOSTARIA DE DAR UMA PEQUENA DICA" name="msg" cols="30" rows="10"></textarea>
          <button>
            <p>Enviar</p>
            <Image
            alt="send"
            src={send}
            width={16}
            />
          </button>
        </form>
      </section>
    </main>
    </DefaultLayout>
  )
}