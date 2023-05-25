'use client'

import { TodoContext } from '@/contexts/Todo'
import { useContext } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import CreateTask from '../CreateTask'
import EmptyTask from '../EmptyTask'
import TaskDiv from '../TaskDiv'

export default function TodoList() {
  const { tasks, offset, setOffset, total, completed, onListTasks } =
    useContext(TodoContext)

  const goToPage = (newOffset: number) => {
    if (newOffset + offset >= 0 && newOffset + offset <= total) {
      setOffset(newOffset + offset)
      onListTasks({ limit: newOffset + offset + 5, offset: newOffset + offset })
    }
  }

  return (
    <div className="aling-center mx-auto flex h-4/5 flex-col justify-center">
      <div className="min-3xl mx-auto justify-center">
        <CreateTask />
        <div className="flex flex-row place-content-around">
          <div className="m-2 rounded-lg bg-gray-50 p-0.5 px-2">
            <span className="text-sm text-black">Total: {total}</span>
          </div>
          <div className="m-2 rounded-lg bg-gray-200 p-0.5 px-2">
            <span className="text-sm text-black">Concluída: {completed}</span>
          </div>
        </div>
        {tasks.length > 0 ? (
          <div>
            {tasks.map((task, index) => (
              <TaskDiv task={task} key={index} />
            ))}
            <div className="flex flex-row place-content-around">
              <button onClick={() => goToPage(-5)} disabled={offset - 5 <= 0}>
                <FaArrowCircleLeft className="m-4" size={48} />
              </button>
              <button
                onClick={() => goToPage(5)}
                disabled={offset + 5 >= total}
              >
                <FaArrowCircleRight className="m-4" size={48} />
              </button>
            </div>
          </div>
        ) : (
          <EmptyTask />
        )}
      </div>
    </div>
  )
}
