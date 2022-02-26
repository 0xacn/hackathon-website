import styles from '../styles/Welcome.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Welcome() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Whack</title>
          <meta name="description" content="Literally the easiest way to terminate your macOS applications." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <h1 className={styles.title}>
            Welcome to whack.
          </h1>
        <a className={styles.subtitle} Link href="./dashboard/dashboard">
            Let's get you started.
        </a>

        <div className={styles.circle}></div>
        </div>
    )
  }