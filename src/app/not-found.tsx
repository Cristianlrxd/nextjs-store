import Image from "next/image";
 import Link from "next/link";
 import styles from 'app/sass/not-found.module.sass'

 export default function NotFund() {

     return(

         <main className={styles.NotFund}>

             <h1 className={styles.NotFund__title}>404</h1>

             <Image

             src="/images/404.png"
             alt="404"
             width={300}
             height={300}
             />
             <h2 className={styles.NotFund__subtitle}>
                 Uy, parece que no se encuentra el enlace!
             </h2>
             <p className={styles.NotFund__message}>Pero nuestra tienda esta abierta 24/7</p>
             <Link className={styles.NotFund__link} href="/store">
             Vamos de compras!
             </Link>

         </main>
     )
 }