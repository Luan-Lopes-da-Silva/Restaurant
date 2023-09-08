import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import '@/app/globals.scss'

export default function DefaultLayout({children}){
  return(
    <>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
    </>
  )
}