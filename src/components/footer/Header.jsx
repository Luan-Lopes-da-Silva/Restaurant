'use client'

import Image from "next/image";
import Link from "next/link";
import Logo from '@/src/assets/Logo.svg'
import style from '@/app/style.module.scss'
import menu from '@/src/assets/menu_FILL0_wght400_GRAD0_opsz24.svg'
import { useRef } from "react";


export default function Header(){
const menuRef = useRef(null) 
function showMenu(ev){

}

  return(
    <header className={style.header}>
          <Link 
          href={'/'}>
          <Image
          alt='Logo'
          src={Logo}
          width={100}
          />
          </Link>
        <nav>
          <div className={style.menu}>
            <Image
            alt='menu'
            src={menu}
            width={40}
            onClick={(ev)=> showMenu(ev.currentTarget)}
            className={style.hamburguer}
            />
          <ul
          ref={menuRef}
          >
            <Link href={'/'}>Home</Link>
            <Link href={'/menu'}>Menu</Link>
            <Link href={'/contact'}>Contact Us</Link>
            <Link href={'/about'}>About Us</Link>
            <button><Link href={'users/login'}>Login</Link></button>
            <button><Link href={'users/signin'}>Signin</Link></button>  
          </ul>
          </div>  
        </nav>  
        </header>
  )
}