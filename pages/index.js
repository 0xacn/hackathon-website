import Head from 'next/head'
import styles from '../styles/Home.module.css'
import toast, { Toaster } from 'react-hot-toast'
import copy from 'copy-to-clipboard'
import { DuplicateIcon } from '@heroicons/react/outline'

export default function Home() {
  const installButton = () => {
    copy('npx whack');
    toast.success('Copied to clipboard.');
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Whack</title>
        <meta name="description" content="Literally the easiest way to terminate your macOS applications." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.introContainer}>
        <h1 className={styles.title}>
          Whack
        </h1>
    <h1 className={styles.subtitle}>Literally the easiest way to terminate your macOS applications.</h1>
    </div>
  <div className={styles.buttonContainer}>
    <a Link="/">
        <button>
          Get started. →
        </button>
    </a>
  </div>

      <div className={styles.getStartedContainer}>
       <button
         onClick={installButton} className={styles.getStarted}>
         npm install whack
         <DuplicateIcon  style={{height:"2rem", width:"1.5rem"}} />
       </button>
      </div>
       <Toaster />
   </div>
  )
}
