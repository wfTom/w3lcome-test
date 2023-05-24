'use client'

import { useContext } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { TaskProps } from './types'
import { TodoContext } from '@/contexts/Todo'

export default function TaskDiv(props: TaskProps) {
  const { task } = props
  const { onDeleteTask, onUpdateTask } = useContext(TodoContext)

  const handleUpdateTask = () => {
    task.isComplete = !task.isComplete
    onUpdateTask(task)
  }

  async function handleDeleteTask() {
    if (task.id) {
      onDeleteTask({ id: task.id })
    }
  }

  return (
    <div
      className={
        ' align-center m-2 flex w-96 grow flex-row gap-8 rounded-lg border-2  bg-gray-900 py-4 pl-4 text-center'
      }
    >
      <input
        checked={task.isComplete}
        onChange={handleUpdateTask}
        type="checkbox"
        className={'h-12 w-6 rounded-full text-center'}
      />
      <p>{task.title}</p>
      <FiTrash2
        className={'ml-0 mr-auto text-right'}
        size={24}
        onClick={handleDeleteTask}
      />
    </div>
  )
}
