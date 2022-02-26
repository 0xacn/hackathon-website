import styles from '../styles/Login.module.css'
import Head from 'next/head'

export default function Login() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Whack</title>
          <meta name="description" content="Literally the easiest way to terminate your macOS applications." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <h1 className={styles.title}>
            Log in to whack
          </h1>

          <p className={styles.gitButton}>Sign in with GitHub.</p>

        </div>
    )
  }