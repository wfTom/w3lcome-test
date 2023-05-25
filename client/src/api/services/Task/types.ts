import { Task } from '@/api/models/Task'

export type FindTask = {
  offset?: number
  limit?: number
}

export type DeleteTask = {
  id: number
}

export type TasksResult = {
  tasks: Array<Task>
  offset: number
  total: number
  completed: number
}
