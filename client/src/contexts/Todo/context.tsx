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
  const [offset, setOffset] = useState(0)
  const [total, setTotal] = useState(0)
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    onListTasks({})
  }, [total])

  async function onCreateTasks(input: Task): Promise<void> {
    try {
      await createTask(input).then((response) => {
        const { tasks, offset, total, completed } = response
        setTasks(tasks)
        setOffset(offset)
        setTotal(total)
        setCompleted(completed)
      })
    } catch (error) {
      setError(
        'Não foi possível completar a requisição, favor tentar novamente mais tarde.',
      )
    }
  }

  async function onListTasks(input: FindTask): Promise<void> {
    try {
      await listTask(input).then((response) => {
        const { tasks, offset, total, completed } = response
        setTasks(tasks)
        setOffset(offset)
        setTotal(total)
        setCompleted(completed)
      })
    } catch (error) {
      setError(
        'Não foi possível completar a requisição, favor tentar novamente mais tarde.',
      )
    }
  }

  async function onDeleteTask(task: DeleteTask): Promise<void> {
    try {
      const { id } = task

      const confirm = window.confirm('Você tem certeza que deseja excluir')

      if (confirm) {
        // interface otimista
        const taskIndex = tasks.findIndex((task) => task.id === id)
        if (taskIndex !== -1) {
          // eslint-disable-next-line no-unused-expressions
          tasks.splice(taskIndex, 1)[0]
          setTasks([...tasks])
          setTotal(tasks.length)

          setTotal(tasks.length - 1)
        }

        await deleteTask(task)
      }
    } catch (error) {
      setError(
        'Não foi possível completar a requisição, favor tentar novamente mais tarde.',
      )
    }
  }

  async function onUpdateTask(updatedTask: Task): Promise<void> {
    try {
      // interface otimista
      const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id)
      if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask }
        setTasks([...tasks])

        if (updatedTask.isComplete) {
          setCompleted(completed + 1)
        } else {
          setCompleted(completed - 1)
        }
      }

      await updateTask(updatedTask)
    } catch (error) {
      setError(
        'Não foi possível completar a requisição, favor tentar novamente mais tarde.',
      )
    }
  }

  return (
    <TodoContext.Provider
      value={{
        tasks,
        setTasks,
        param,
        setParam,
        error,
        offset,
        setOffset,
        total,
        completed,
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
