'use client'

import { createTask } from '@/api/services/Task'
import { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'

export default function CreateTask() {
  const [title, setTitle] = useState<string>('')

  async function handleAddTodoList() {
    if (title !== '') {
      await createTask({ title, isComplete: false })
      setTitle('')
    }
  }

  return (
    <div className={'m-2 my-auto max-w-3xl px-0 py-1'}>
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
            'align-center flex h-12 flex-row justify-center gap-2 rounded-lg bg-blue-950 p-4 text-white'
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
