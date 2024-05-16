import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const feretroValidation = {
  schema: schema.create({
    peso: schema.number([
        rules.required(), 
        rules.range(1, 100)
    ]),
  }),
}