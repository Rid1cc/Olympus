import Link from 'next/link';
import styles from '../styles/Home.module.css';
export default function Header() {
  return (
    <div className={styles.header}>
      <h2 className={styles.animationHeader}>
        ⛰️ Olympus
        </h2>
        
        <Link href="/weather" className={styles.routerContent}><h4>  Pogoda  </h4></Link>
        <Link href="/weather" className={styles.routerContent}><h4>  Diagnostyka  </h4></Link>
        <Link href="/weather" className={styles.routerContent}><h4>  Druk  </h4></Link>
    </div>
  );
}
