'use client'

import { TodoContext } from '@/contexts/Todo'
import { useState, useContext } from 'react'
import { BsPlusCircle } from 'react-icons/bs'

export default function CreateTask() {
  const [title, setTitle] = useState<string>('')
  const { onCreateTasks } = useContext(TodoContext)

  async function handleAddTodoList() {
    if (title !== '') {
      onCreateTasks({ title, isComplete: false })
      setTitle('')
    }
  }

  return (
    <div className={'m-2 my-auto mt-2.5 px-0 py-1'}>
      <div className={'flex w-96 gap-2'}>
        <input
          className={
            'placeholder:gray-300 h-12 w-10 grow rounded-lg border-0 bg-gray-500 p-4 text-white focus:outline-4'
          }
          placeholder="Adicione uma tarefa"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          onClick={handleAddTodoList}
          className={
            'align-center align-center flex h-12 flex-row justify-center gap-2 rounded-lg bg-blue-950 p-4 text-white'
          }
          type="button"
        >
          Criar
          <BsPlusCircle className="align-center" />
        </button>
      </div>
    </div>
  )
}
