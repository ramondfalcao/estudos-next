import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Hello World! Nexts.js</h1>
    </div>
  )
}
