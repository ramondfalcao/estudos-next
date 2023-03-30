import Link from "next/link";
import { useRouter } from "next/router";

export default function Todo() {
  const router = useRouter()
  const todoId = router.query.todoId

  return (
    <>
      <Link href="/">Voltar</Link>
      <h1>Exibindo o todo: {todoId}</h1>
      <p>Comentário: la la la... 
        <Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link>
      </p>
      <p>Comentário: la la la... 
        <Link href={`/todos/${todoId}/comments/2`}>Detalhes</Link>
      </p>
      <p>Comentário: la la la... 
        <Link href={`/todos/${todoId}/comments/3`}>Detalhes</Link>
      </p>
      <p>Comentário: la la la... 
        <Link href={`/todos/${todoId}/comments/4`}>Detalhes</Link>
      </p>
      <p>Comentário: la la la... 
        <Link href={`/todos/${todoId}/comments/5`}>Detalhes</Link>
      </p>
      <p>Comentário: la la la... 
        <Link href={`/todos/${todoId}/comments/6`}>Detalhes</Link>
      </p>
    </>
  )
}