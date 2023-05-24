import { Task } from '@/api/models/Task'
import { DeleteTask, FindTask } from '@/api/services/Task/types'
import { Dispatch, SetStateAction } from 'react'

export type TodoContextProps = {
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
  param: string
  setParam: Dispatch<SetStateAction<string>>
  error: string
  onCreateTasks: (input: Task) => void
  onListTasks: (input: FindTask) => void
  onDeleteTask: (id: DeleteTask) => void
  onUpdateTask: (task: Task) => void
}
