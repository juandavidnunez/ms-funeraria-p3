import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const pagoValidation = {
  schema: schema.create({
    monto: schema.number([
        rules.required(), 
        rules.range(0, 100000000000)
    ]),
    suscripcion_id: schema.number([
        rules.exists({ table: 'suscripciones', column: 'id' })
    ]),
  }),
}
