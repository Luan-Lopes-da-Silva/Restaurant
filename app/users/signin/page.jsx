import UsersLayout from "@/src/layouts/UsersLayout";

export default function Signin(){
  return(
    <UsersLayout>
    <label htmlFor="name">Nome</label>
    <input 
    type="text" 
    name="name"
    id="name"
    placeholder="Seu nome"
    />
    <label htmlFor="email">Email</label>
    <input 
    type="text" 
    name="email"
    id="email"
    placeholder="Seu email"
    />
    <label htmlFor="confirmEmail">Confirmacao email</label>
    <input 
    type="text" 
    name="confirmEmail"
    id="confirmEmail"
    placeholder="Confirmacao email"
    />
    <label htmlFor="password">Senha</label>
    <input 
    type="password" 
    name="password"
    id="password"
    placeholder="Senha"
    />
    <label htmlFor="confirmPassword">Confirmacao senha</label>
    <input 
    type="password" 
    name="confirmPassword"
    id="confirmPassword"
    placeholder="Confirmacao senha"
    />
    <button>Cadastrar</button>
    </UsersLayout>
    
  )
}
