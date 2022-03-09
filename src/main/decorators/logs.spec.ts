import { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols'
import { LogControllerDecorator } from './logs'

const makeController = (): Controller => {
  class ControllerStub implements Controller {
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
      const httpResponse = {
        statusCode: 200,
        body: { name: 'Renato' }
      }
      return httpResponse
    }
  }
  const controllerStub = new ControllerStub()
  return controllerStub
}

interface SutTypes {
  sut: LogControllerDecorator
  controllerStub: Controller
}

const makeSut = (): SutTypes => {
  const controllerStub = makeController()
  const sut = new LogControllerDecorator(controllerStub)
  return { sut, controllerStub }
}

describe('LogController Decorator', () => {
  test('Shoud call controller handle', async () => {
    const { sut, controllerStub } = makeSut()
    const handleSpy = jest.spyOn(controllerStub, 'handle')
    const httpRequest = {
      body: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
    await sut.handle(httpRequest)
    expect(handleSpy).toHaveBeenLastCalledWith(httpRequest)
  })

  test('Shoud return the same result of the controller', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual({
      statusCode: 200,
      body: { name: 'Renato' }
    })
  })
})
