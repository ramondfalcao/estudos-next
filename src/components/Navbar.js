import Link from "next/link";

export default function Navbar() {
  return (
      <ul>
        <li>
          <Link href="/products">
            Produtos
          </Link>
          <Link href="/about">
            Sobre
          </Link>
        </li>
      </ul>
  )
}