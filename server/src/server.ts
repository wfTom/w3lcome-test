import express, { ErrorRequestHandler } from 'express'
import _ from 'lodash'
import cors from 'cors'
import * as swaggerUi from 'swagger-ui-express'
import configSwagger from './utils/swagger'
import tasksRoutes from './tasks/routes/task.routers'
require('express-async-errors')

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(tasksRoutes)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(configSwagger))

// eslint-disable-next-line @typescript-eslint/no-var-requires
app.use('/healthcheck', require('express-healthcheck')())

// tratamento de erro
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const status = _.get(err, 'status', 500)

  const errors = _.get(err, 'errors', [])
  const message = _.get(err, 'message', 'Algo de errado não está certo')

  res.status(status).json({ message, errors })

  next()
}

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
