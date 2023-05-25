import _ from 'lodash'
import { ValidationError } from 'yup'
import { ErrorValidation } from './types'

class ErrorBusiness extends Error {
  status: number

  errors: unknown

  constructor(status: number, message: string, errors: ErrorValidation[] = []) {
    super(message)
    this.status = status
    this.errors = errors
  }
}

export function handlerError(err: unknown): ErrorBusiness {
  let errors: ErrorValidation[] = _.get(err, 'errors', [])

  const status = _.get(err, 'status', 500)
  const message = _.get(err, 'message', 'Algo de errado não está certo')

  if (err instanceof ValidationError) {
    errors = err.inner.map(
      ({ path = 'validation', errors: errorsValidation }) => ({
        path,
        error: errorsValidation[0],
      }),
    )
  }

  return new ErrorBusiness(status, message, errors)
}

export default ErrorBusiness
