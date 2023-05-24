import express from 'express'
import cors from 'cors'
import tasksRoutes from './tasks/routes/task.routers'
require('express-async-errors')

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())
app.use(tasksRoutes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
