import Image from "next/image";
import Link from "next/link";
import Logo from '@/src/assets/Logo.svg'
import style from '@/app/style.module.scss'

export default function Footer(){
  return(
    <footer className={style.footer}>
          <Link 
          href={'/'}>
          <Image
          alt='Logo'
          src={Logo}
          width={100}
          />
          </Link>
          <p>Desenvolvido por Luan e Ricardo</p>
        </footer>
  )
}