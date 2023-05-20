import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())

interface Task {
  id: number
  titulo: string
  concluida: boolean
}

const tasks: Task[] = [
  { id: 1, titulo: 'Aprender React', concluida: true },
  { id: 2, titulo: 'Estudar Node.js', concluida: false },
  { id: 3, titulo: 'Praticar TypeScript', concluida: false },
]

// GET /tasks?limit=10&offset=0
app.get('/tasks', (req: Request, res: Response) => {
  const limit = parseInt(req.query.limit as string) || tasks.length
  const offset = parseInt(req.query.offset as string) || 0

  const paginatedTasks = tasks.slice(offset, offset + limit)

  res.json(paginatedTasks)
})

// POST /tasks
app.post('/tasks', (req: Request, res: Response) => {
  const newTask: Task = req.body

  // Validations
  if (
    !newTask ||
    !newTask.id ||
    !newTask.titulo ||
    newTask.concluida === undefined
  ) {
    return res.status(400).json({ message: 'Invalid task data' })
  }

  tasks.push(newTask)
  res.status(201).json(newTask)
})

// PATCH /tasks/:id
app.patch('/tasks/:id', (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id)
  const updatedTask: Task = req.body

  // Validations
  if (
    !updatedTask ||
    !updatedTask.titulo ||
    updatedTask.concluida === undefined
  ) {
    return res.status(400).json({ message: 'Invalid task data' })
  }

  const taskIndex = tasks.findIndex((task) => task.id === taskId)

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' })
  }

  tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask }

  res.json(tasks[taskIndex])
})

// DELETE /tasks/:id
app.delete('/tasks/:id', (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id)

  const taskIndex = tasks.findIndex((task) => task.id === taskId)

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' })
  }

  const deletedTask = tasks.splice(taskIndex, 1)[0]

  res.json(deletedTask)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
