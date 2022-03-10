export class UnauthorizedError extends Error {
  constructor () {
    super()
    this.name = 'Unauthorized'
    this.message = 'UnauthorizedError'
  }
}
