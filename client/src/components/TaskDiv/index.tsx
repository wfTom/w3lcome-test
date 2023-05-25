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

  const handleDeleteTask = () => {
    if (task.id) {
      onDeleteTask({ id: task.id })
    }
  }

  return (
    <div
      className={
        'align-center m-2 flex w-96 grow flex-row items-center justify-center justify-between gap-8  rounded-lg border-2 bg-gray-900 py-4 pl-4 text-center'
      }
    >
      <div>
        <input
          checked={task.isComplete}
          onChange={handleUpdateTask}
          type="checkbox"
          className={'h-8 w-4 rounded-full text-center'}
        />
      </div>
      <div className="flex flex-1 justify-start">
        <p>{task.title}</p>
      </div>
      <div>
        <FiTrash2
          className="mr-2.5 flex-1 justify-end text-right"
          size={24}
          onClick={handleDeleteTask}
        />
      </div>
    </div>
  )
}
