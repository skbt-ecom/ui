import { isValid, parse } from 'date-fns'
import { z } from 'zod'
import { VALIDATION_MESSAGES } from '../messages'

export const zodCalendarValidate = z
  .string()
  .length(10, { message: VALIDATION_MESSAGES.INVALID_DATE })
  .superRefine((val, ctx) => {
    const [day, month, year] = val?.split('.') ?? ''
    const parsed = parse(`${day}/${month}/${year}`, 'dd/MM/yyyy', new Date())

    if (+year <= 1950) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_MESSAGES.INVALID_DATE
      })
    }

    if (!isValid(parsed)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_MESSAGES.INVALID_DATE
      })
    }

    if (new Date().getTime() < new Date(parsed).getTime()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_MESSAGES.FUTURE_DATE_NOT_ALLOWED
      })
    }
  })
