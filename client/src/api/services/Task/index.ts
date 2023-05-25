import api from '@/api/index'
import { Task } from '@/api/models/Task'
import { DeleteTask, FindTask, TasksResult } from './types'

export const createTask = async (data: Task): Promise<TasksResult> => {
  return await api.post('/tasks', data)
}

export const listTask = async (data: FindTask): Promise<TasksResult> => {
  const { limit = 5, offset = 0 } = data
  return await api.get(`/tasks?limit=${limit}&offset=${offset}`)
}

export const updateTask = async (data: Task): Promise<void> => {
  const { id, ...rest } = data
  await api.patch(`/tasks/${id}`, rest)
}

export const deleteTask = async (data: DeleteTask): Promise<void> => {
  const { id } = data
  await api.delete(`/tasks/${id}`)
}
