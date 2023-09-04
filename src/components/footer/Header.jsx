import Image from "next/image";
import Link from "next/link";
import Logo from '@/src/assets/Logo.svg'
import style from '@/app/style.module.scss'
import menu from '@/src/assets/menu_FILL0_wght400_GRAD0_opsz24.svg'

export default function Header(){
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
          <div>
            <Image
            alt='menu'
            src={menu}
            />
          </div>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <button>Login</button>
            <button>Signin</button>  
          </ul>  
        </nav>  
        </header>
  )
}