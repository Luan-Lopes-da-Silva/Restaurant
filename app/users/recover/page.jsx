import UsersLayout from "@/src/layouts/UsersLayout"

export const metadata = {
  title: 'Recuperar senha'
}

export default function Recover(){
  return(
    <UsersLayout>
      <label htmlFor="email">Email</label>
      <input 
      type="text" 
      name="email"
      id="email"
      placeholder="Seu email"
      />
      <button>Verificar</button>
    </UsersLayout>
  )
}