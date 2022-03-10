import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../../protocols'
import { Controller } from './../../protocols/controller'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }

    if (!httpRequest.body.any_password) {
      return badRequest(new MissingParamError('password'))
    }

    return badRequest(new MissingParamError('email'))
  }
}
