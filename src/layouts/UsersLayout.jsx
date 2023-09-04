import Image from 'next/image'
import style from './layout.module.scss'
import bg from '@/src/assets/bg.svg'
import './globals.scss'

export default function UsersLayout({children}){
  return(
    <>
    <main className={style.form}>
      <div className={style.firstColumn}>
        <Image
        alt='bg'
        src={bg}
        width={500}
        />
      </div>
      <div className={style.secondColumn}>{children}</div>
    </main>
    </>
  )
}