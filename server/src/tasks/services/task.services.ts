import { logger } from '../../utils/logger'
import { DeleteTaskType } from '../interfaces/deleteTask.type'
import { FindTaskType } from '../interfaces/findTask.type'
import { Task } from '../interfaces/task.interface'

const tasks: Task[] = [
  { id: 1, title: 'Aprender React', isComplete: true },
  { id: 2, title: 'Estudar Node.js', isComplete: false },
  { id: 3, title: 'Praticar TypeScript', isComplete: false },
]

export const FindTaskService = async (input: FindTaskType) => {
  try {
    const { limit = tasks.length, offset = 0 } = input

    return tasks.slice(offset, offset + limit)
  } catch (error) {
    logger.info('Error FindTaskService : Invalid task data')
    throw new Error('Invalid task data')
  }
}

export const CreateTaskService = async (input: Task) => {
  try {
    const newTask: Task = input
    newTask.id = tasks.length + 1

    if (
      !newTask ||
      !newTask.id ||
      !newTask.title ||
      newTask.isComplete === undefined
    ) {
      logger.info('Error CreateTaskService : Invalid task data')
      throw new Error('Invalid task data')
    }

    logger.info('CreateTaskService working...')
    tasks.push(newTask)
  } catch (error) {
    logger.info('Error CreateTaskService : Erro on task creation')
    throw new Error('Erro on task creation')
  }
}

export const UpdateTaskService = async (input: Task) => {
  try {
    const updatedTask: Task = input

    if (
      !updatedTask ||
      !updatedTask.title ||
      updatedTask.isComplete === undefined
    ) {
      logger.info('Error UpdateTaskService : Invalid task data')
      throw new Error('Invalid task data')
    }

    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id)

    if (taskIndex === -1) {
      logger.info('Error UpdateTaskService : Task not found')
      throw new Error('Task not found')
    }

    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask }
    logger.info('UpdateTaskService working...')
    return tasks[taskIndex]
  } catch (error) {
    logger.info('Error UpdateTaskService : Error on update task')
    throw new Error('Error on update task')
  }
}

export const DeleteTaskService = async (input: DeleteTaskType) => {
  try {
    const { taskId } = input
    const taskIndex = tasks.findIndex((task) => task.id === taskId)

    if (taskIndex === -1) {
      logger.info('Error DeleteTaskService : Task not found')
      throw new Error('Task not found')
    }

    logger.info('DeleteTaskService working...')
    return tasks.splice(taskIndex, 1)[0]
  } catch (error) {
    logger.info('Error DeleteTaskService : Deleted task error')
    throw new Error('Deleted task error')
  }
}
