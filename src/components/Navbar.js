import Link from "next/link";
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            Home
          </Link>
          <Link href="/products">
            Produtos
          </Link>
          <Link href="/about">
            Sobre
          </Link>
          <Link href="/conta">
            Conta
          </Link>
          <Link href="/todos">
            Todo
          </Link>
        </li>
      </ul>
  )
}