import UsersLayout from "@/src/layouts/UsersLayout";
import style from './page.module.scss'
import Link from "next/link";

export default function Login(){
  return(
    <UsersLayout>
    <label htmlFor="email">Email</label>
    <input 
    type="text" 
    name="email"
    id="email"
    placeholder="Seu email"
    />
    <label htmlFor="password">Senha</label>
    <input 
    type="password" 
    name="password"
    id="password"
    placeholder="Senha"
    />
    <div className={style.links}>
      <Link href={'/users/recover'}>Esqueceu sua senha?</Link>
      <Link href={'/users/signin'}>Criar nova conta</Link>
    </div>
    <button>Login</button>
    </UsersLayout>
    
  )
}
