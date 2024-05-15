import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const titularValidation = {
    schema: schema.create({
        cliente_id: schema.number([
          rules.required(),
          rules.exists({ table: 'clientes', column: 'id' }),
        ]),
      })
      
}