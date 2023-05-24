'use client'

import { createContext, useEffect, useState } from 'react'
import { Task } from '@/api/models/Task'
import { DeleteTask, FindTask } from '@/api/services/Task/types'
import { TodoContextProps } from './types'
import {
  createTask,
  deleteTask,
  listTask,
  updateTask,
} from '@/api/services/Task'

export const TodoContext = createContext({} as TodoContextProps)

export const TodoProvider = (props: any) => {
  const { children } = props
  const [param, setParam] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    listTask({}).then((response) => {
      const { data } = response
      setTasks(data)
    })
  }, [])

  async function onCreateTasks(input: Task): Promise<void> {
    try {
      await createTask(input)
      await onListTasks({})
    } catch (error) {
      setError(
        'Não foi possível completar a requisição, favor tentar novamente mais tarde.',
      )
    }
  }

  async function onListTasks(input: FindTask): Promise<void> {
    try {
      setTasks(await listTask(input))
    } catch (error) {
      setError(
        'Não foi possível completar a requisição, favor tentar novamente mais tarde.',
      )
    }
  }

  async function onDeleteTask(task: DeleteTask): Promise<void> {
    try {
      await deleteTask(task)
      await onListTasks({})
    } catch (error) {
      setError(
        'Não foi possível completar a requisição, favor tentar novamente mais tarde.',
      )
    }
  }

  async function onUpdateTask(task: Task): Promise<void> {
    try {
      await updateTask(task)
      await onListTasks({})
    } catch (error) {
      setError(
        'Não foi possível completar a requisição, favor tentar novamente mais tarde.',
      )
    }
  }

  return (
    <TodoContext.Provider
      value={{
        param,
        setParam,
        error,
        tasks,
        setTasks,
        onCreateTasks,
        onListTasks,
        onDeleteTask,
        onUpdateTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
