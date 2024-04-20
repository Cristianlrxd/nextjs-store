import Link from "next/link"
 import styles from "./Header.module.sass"
 import { cookies } from "next/headers"
 export default function Header(){
   const cookiesStores = cookies()
   const token = cookiesStores.get('accessToken')?.value

   if(token){

   }
    return <header>
     <nav className={styles.Header} >
       <Link href="/" style={{textDecoration:"none",color:"violet"}} >Inicio</Link>
       <Link href="/store"  style={{textDecoration:"none",color:"violet"}}
        >Tienda</Link>
        {token ? (<p style={{color:"violet", marginTop:"-0px"}} >Hola</p>) : <Link href="/login" style={{textDecoration:"none", color:"violet"}} >Login</Link>}
     </nav>
   </header>
 } 