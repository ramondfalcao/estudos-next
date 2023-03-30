import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name="keywords" content="Roupas, Calçados, Boné"></meta>
        <meta
          name="description"
          content="Encontre a melhor roupa para vocẽ!"
        ></meta>
      </Head>
      <div className={styles.container}>
        <h1>Hello World! Nexts.js</h1>
      </div>
    </>
  )
}
