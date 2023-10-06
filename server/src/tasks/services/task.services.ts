import { handlerError } from '../../utils/error'
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
    const { limit = 5, offset = 0 } = input

    logger.info('FindTaskService working... -> input:', input)

    return {
      tasks: tasks.slice(offset, offset + limit),
      total: tasks.length,
      completed: tasks.filter((task) => task.isComplete === true).length,
      offset,
    }
  } catch (error) {
    logger.info('Error FindTaskService : Invalid task data -> input:', input)
    throw handlerError(new Error('Error FindTaskService : Invalid task data'))
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
      logger.info(
        'Error CreateTaskService : Invalid task data -> input:',
        input,
      )
      throw handlerError(
        new Error('Error CreateTaskService : Invalid task data'),
      )
    }

    logger.info('CreateTaskService working... -> input:', input)
    tasks.push(newTask)
  } catch (error) {
    logger.info(
      'Error CreateTaskService : Erro on task creation-> input:',
      input,
    )
    throw handlerError(
      new Error('Error CreateTaskService : Erro on task creation'),
    )
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
      logger.info(
        'Error UpdateTaskService : Invalid task data -> input:',
        input,
      )
      throw handlerError(
        new Error('Error UpdateTaskService : Invalid task data'),
      )
    }

    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id)

    if (taskIndex === -1) {
      logger.info('Error UpdateTaskService : Task not found -> input:', input)
      throw handlerError(new Error('Error UpdateTaskService : Task not found'))
    }

    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask }
    logger.info('UpdateTaskService working... -> input:', input)
    return tasks[taskIndex]
  } catch (error) {
    logger.info(
      'Error UpdateTaskService : Error on update task -> input:',
      input,
    )
    throw handlerError(
      new Error('Error UpdateTaskService : Error on update task'),
    )
  }
}

export const DeleteTaskService = async (input: DeleteTaskType) => {
  try {
    const { taskId } = input
    const taskIndex = tasks.findIndex((task) => task.id === taskId)

    if (taskIndex === -1) {
      logger.info('Error DeleteTaskService : Task not found -> input:', input)
      throw handlerError(new Error('Error DeleteTaskService : Task not found'))
    }

    logger.info('DeleteTaskService working... -> input:', input)
    return tasks.splice(taskIndex, 1)[0]
  } catch (error) {
    logger.info('Error DeleteTaskService : Deleted task error -> input:', input)
    throw handlerError(
      new Error('Error DeleteTaskService : Deleted task error'),
    )
  }
}
