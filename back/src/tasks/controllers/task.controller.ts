import { FindTaskType } from '../interfaces/findTask.type'
import { Task } from '../interfaces/task.interface'
import * as server from '../services/task.services'
import { DeleteTaskType } from '../interfaces/deleteTask.type'

export const FindTask = async (input: FindTaskType) => {
  return server.FindTaskService(input)
}

export const CreateTask = async (input: Task) => {
  return server.createTaskService(input)
}

export const UpdateTask = async (input: Task) => {
  return server.updateTaskService(input)
}

export const DeleteTask = async (input: DeleteTaskType) => {
  return server.DeleteTaskService(input)
}
