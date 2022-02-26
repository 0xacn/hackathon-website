import styles from '../../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <div className={styles.header}>
            <Link href="/login">
      <button className={styles.signup}>
         Sign up
       </button>
    </Link>
<Link href="/login" className={styles.login}>Log in</Link>
    </div>
    )
}