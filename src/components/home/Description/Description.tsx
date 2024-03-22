import styles from './Description.module.sass'
import image from 'next/image'
export const Description = () => {
    return(
        <section className={styles.Description}>
            <img 
             src="/images/description.jpeg" 
             alt="products" 
             width={500} 
             height={300}         
             />

<div className={styles.Description__text}>
             <h2>Description</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae earum natus, ducimus a harum quae. Obcaecati ipsum vero aperiam quae deleniti perspiciatis cumque excepturi, distinctio sequi eveniet quasi ipsam repellendus!</p>
             </div>

         </section>
     )

    }