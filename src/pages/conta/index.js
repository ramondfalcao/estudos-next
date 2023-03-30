import Head from "next/head";
import Link from "next/link";

export default function Conta() {
  return (
    <>
      <Head>
        <title>Detalhes da Conta</title>
      </Head>
      <h1>Detalhes da Conta</h1>
      <Link href="/">
          Voltar
      </Link>
    </>
  )
}