import { InvalidParamError } from '../../errors'
import { Validation } from './validation'

export class CompareFieldsValidation implements Validation {
  private readonly fieldName: string
  private readonly fieldToCompareName: string

  constructor (fieldName: string, fieldToCompareName: string) {
    this.fieldName = fieldName
    this.fieldToCompareName = fieldToCompareName
  }

  validate (): Error | undefined {
    if (this.fieldName !== this.fieldToCompareName) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}
