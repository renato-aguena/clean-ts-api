import { SignUpController } from './../../presentation/controllers/signup/signup'
import { BcryptAdapter } from './../../infra/criptography/bcrypt.adapter'
import { AccountMongoRepository } from './../../infra/db/mongodb/account-repository/account'
import { LogMongoRepository } from './../../infra/db/mongodb/log-repository/log'
import { EmailValidatorAdapter } from './../../utils/email-validator-adapter'
import { DbAddAccount } from './../../data/usecases/add-account/db-add-account'
import { Controller } from './../../presentation/protocols'
import { LogControllerDecorator } from './../decorators/logs'
import { makeSignUpValidation } from './signup-validation'

export const makeSignUpController = (): Controller => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const logMongoRepository = new LogMongoRepository()
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  const signUpController = new SignUpController(emailValidatorAdapter, dbAddAccount, makeSignUpValidation())
  return new LogControllerDecorator(signUpController, logMongoRepository)
}
