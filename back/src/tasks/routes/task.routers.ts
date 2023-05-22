import {
  UpdateTask,
  CreateTask,
  DeleteTask,
  FindTask,
} from '../controllers/task.controller'
import express, { Request, Response } from 'express'

const tasksRoutes = express.Router()

// GET /tasks?limit=10&offset=0
tasksRoutes.get('/tasks', async (req: Request, res: Response) => {
  const limit = parseInt(req.query.limit as string)
  const offset = parseInt(req.query.offset as string) || 0

  res.status(200).json(await FindTask({ offset, limit }))
})

// POST /tasks
tasksRoutes.post('/tasks', async (req: Request, res: Response) => {
  res.status(201).json(await CreateTask(req.body))
})

// PATCH /tasks/:id
tasksRoutes.patch('/tasks/:id', async (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id)

  res.json(await UpdateTask({ id: taskId, ...req.body }))
})

// DELETE /tasks/:id
tasksRoutes.delete('/tasks/:id', async (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id)

  await DeleteTask({ taskId })

  res.status(204)
})

export default tasksRoutes
