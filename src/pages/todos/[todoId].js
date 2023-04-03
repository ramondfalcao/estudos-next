import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticProps(context) {
  const { params } = context

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`,
  )

  const todo = await data.json()

  return {
    props: { todo },
  }
}

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`)

  const data = await response.json()

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    }
  })

  return { paths, fallback: false }

  // Fallback = false, faz com que a geração do conteudo seja no tempo de build apenas
  // Fallback = true, faz com que quando a api for atualizada, a aplicação altera seu conteudo também
}

export default function Todo({ todo }) {
  return (
    <>
      <Link href="/todos">Voltar</Link>
      <h1>Exibindo o todo: {todo.id}</h1>
      <h3>Texto: {todo.title}</h3>
      <p>Comentário: la la la... 
        <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link>
      </p>
      <p>Comentário: la la la... 
        <Link href={`/todos/${todo.id}/comments/2`}>Detalhes</Link>
      </p>
      <p>Comentário: la la la... 
        <Link href={`/todos/${todo.id}/comments/3`}>Detalhes</Link>
      </p>
      <p>Comentário: la la la... 
        <Link href={`/todos/${todo.id}/comments/4`}>Detalhes</Link>
      </p>
      <p>Comentário: la la la... 
        <Link href={`/todos/${todo.id}/comments/5`}>Detalhes</Link>
      </p>
      <p>Comentário: la la la... 
        <Link href={`/todos/${todo.id}/comments/6`}>Detalhes</Link>
      </p>
    </>
  )
}