import { DeleteTaskType } from '../interfaces/deleteTask.type'
import { FindTaskType } from '../interfaces/findTask.type'
import { Task } from '../interfaces/task.interface'

const tasks: Task[] = [
  { id: 1, titulo: 'Aprender React', concluida: true },
  { id: 2, titulo: 'Estudar Node.js', concluida: false },
  { id: 3, titulo: 'Praticar TypeScript', concluida: false },
]

export const FindTaskService = async (input: FindTaskType) => {
  try {
    const { limit = tasks.length, offset = 0 } = input
    console.log(offset)
    console.log('sem offset:', tasks.slice(offset + limit))
    console.log('com offset:', tasks.slice(offset, offset + limit))
    return tasks.slice(offset, offset + limit)
  } catch (error) {
    throw new Error('Invalid task data')
  }
}

export const createTaskService = async (input: Task) => {
  try {
    const newTask: Task = input

    if (
      !newTask ||
      !newTask.id ||
      !newTask.titulo ||
      newTask.concluida === undefined
    ) {
      throw new Error('Invalid task data')
    }

    tasks.push(newTask)
  } catch (error) {
    throw new Error('Erro na deleção da task')
  }
}

export const updateTaskService = async (input: Task) => {
  try {
    const updatedTask: Task = input

    if (
      !updatedTask ||
      !updatedTask.titulo ||
      updatedTask.concluida === undefined
    ) {
      throw new Error('Invalid task data')
    }

    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id)

    if (taskIndex === -1) {
      throw new Error('Task not found')
    }

    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask }
    return tasks[taskIndex]
  } catch (error) {
    throw new Error('Erro na deleção da task')
  }
}

export const DeleteTaskService = async (input: DeleteTaskType) => {
  try {
    const { taskId } = input
    const taskIndex = tasks.findIndex((task) => task.id === taskId)

    if (taskIndex === -1) {
      throw new Error('Task not found')
    }

    return tasks.splice(taskIndex, 1)[0]
  } catch (error) {
    throw new Error('Deleted task error')
  }
}
