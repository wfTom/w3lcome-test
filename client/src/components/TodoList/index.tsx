'use client'

import { TodoContext } from '@/contexts/Todo'
import { useContext } from 'react'
import CreateTask from '../CreateTask'
import EmptyTask from '../EmptyTask'
import TaskDiv from '../Task'

export default function TodoList() {
  const { tasks } = useContext(TodoContext)

  return (
    <div className="aling-center mx-auto flex h-4/5 flex-col justify-center">
      <div className="min-3xl mx-auto justify-center">
        <CreateTask />
        <div className="flex divide-y divide-gray-400"></div>
        {tasks.length > 0 ? (
          tasks.map((task, index) => <TaskDiv task={task} key={index} />)
        ) : (
          <EmptyTask />
        )}
      </div>
    </div>
  )
}
