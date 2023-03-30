import Head from "next/head";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>
      <h1>Produtos</h1>
      <Link href="/">
          Voltar
      </Link>
    </>
  )
}