import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import TodoList from '@/components/TodoList'

export default function Home() {
  return (
    <main>
      <Header />
      <TodoList />
      <Footer />
    </main>
  )
}
