import Head from 'next/head'
import styles from '../styles/Home.module.css'
import toast, { Toaster } from 'react-hot-toast'
import copy from 'copy-to-clipboard'
import { DuplicateIcon } from '@heroicons/react/outline'
import { Circle, Square } from "react-awesome-shapes"
import { animate } from "motion"
import {useEffect} from "react"

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
    <h1 className={styles.subtitle}>Literally the <b> easiest </b>way to terminate your macOS applications.</h1>
    </div>
  <div className={styles.buttonContainer}>
    <a Link="/">
        <button>
          Get started. →
        </button>
    </a>
  </div>

  <Square
    color="linear-gradient(135deg, #fdba74, #f97316)"
    size="8rem"
    zIndex={2}
    top="20%"
    left= "70%"
/>

<Circle
    color="linear-gradient(135deg, #a5b4fc, #6366f1)"
    size={['100px', '50px', '80px', '80px']}
    top="70%"
    left="50%"
    zIndex={2}
/>

<div className="box"></div>

      <div className={styles.getStartedContainer}>
       <button
         onClick={installButton} className={styles.getStarted}>
         npm install whack
       </button>
      </div>
       <Toaster />
   </div>
  )
}

//<DuplicateIcon className="w-6 h-6 ml-2 -mr-3 text-gray-400" />
//<div className="relative mt-3 rounded-md sm:mt-0 sm:ml-3">

/*
function Animate() {
  useEffect(() => {
    const boxes = document.querySelectorAll(".box")
    
    animate(
      "#box",
      { transform: "rotate(45deg)" },
      { duration: 0.5 }
    )
  })}
  */