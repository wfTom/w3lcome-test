import ErrorBusiness from '../../utils/error'
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
  try {
    const limit = parseInt(req.query.limit as string)
    const offset = parseInt(req.query.offset as string) || 0

    res.status(200).json(await FindTask({ offset, limit }))
  } catch (err) {
    res
      .status((err as ErrorBusiness).status)
      .send((err as ErrorBusiness).message)
  }
})

// POST /tasks
tasksRoutes.post('/tasks', async (req: Request, res: Response) => {
  try {
    await CreateTask(req.body)
    res.status(201).json(await FindTask({}))
  } catch (err) {
    res
      .status((err as ErrorBusiness).status)
      .send((err as ErrorBusiness).message)
  }
})

// PATCH /tasks/:id
tasksRoutes.patch('/tasks/:id', async (req: Request, res: Response) => {
  try {
    const taskId = parseInt(req.params.id)

    res.json(await UpdateTask({ id: taskId, ...req.body }))
  } catch (err) {
    res
      .status((err as ErrorBusiness).status)
      .send((err as ErrorBusiness).message)
  }
})

// DELETE /tasks/:id
tasksRoutes.delete('/tasks/:id', async (req: Request, res: Response) => {
  try {
    const taskId = parseInt(req.params.id)

    await DeleteTask({ taskId })

    res.status(204)
  } catch (err) {
    res
      .status((err as ErrorBusiness).status)
      .send((err as ErrorBusiness).message)
  }
})

export default tasksRoutes
