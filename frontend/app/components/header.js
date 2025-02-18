import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Header.module.css'

const Header = () => {
   return(
      <nav className={styles.sidebar}>
         <div className={`${styles.link} ${styles.home}`}>
            <Link href={"/"} legacyBehavior>
               <a>
                  <Image src="/home.svg" alt="Home" width={20} height={20} />
               </a>
            </Link>
         </div>
         <div className={styles.link}>
            <Link href={"/wardrobe"} legacyBehavior>
               <a>
                  <Image src="/clothing.svg" alt="Clothing" width={20} height={20} />
               </a>
            </Link>
         </div>
         <div className={styles.link}>
            <Link href={"/"} legacyBehavior>
               <a>
                  <Image src="/wardrobe.svg" alt="Wardrobe" width={18} height={18} />
               </a>
            </Link>
         </div>
         <div className={styles.link}>
            <Link href={"/"} legacyBehavior>
               <a>
                  <Image src="/socialNetwork.svg" alt="Social Network" width={20} height={20} />
               </a>
            </Link>
         </div>
         <div className={styles.link}>
            <Link href={"/"} legacyBehavior>
               <a>
                  <Image src="/liked.svg" alt="Liked" width={20} height={20} />
               </a>
            </Link>
         </div>
      </nav>
   )
}

export default Header
