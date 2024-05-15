import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const conductorValidation = {
    schema: schema.create({
        usuario_id: schema.number([
          rules.required(),
        ]),
      })
}
