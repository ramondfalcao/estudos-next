import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import cityImage from '../../public/images/city.jpeg'

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
        <Image
          alt="City"
          src={cityImage}
          width={1000}
          height={1000}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
    </>
  )
}
