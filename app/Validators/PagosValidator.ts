import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const pagoValidation = {
  schema: schema.create({
    monto: schema.number([
        rules.required(), 
        rules.range(0, 100000000000)
    ]),
    metodo_pago: schema.string({ trim: true }, [
      rules.required(),
      rules.maxLength(255),
    ]),
    suscripcion_id: schema.number([
        rules.exists({ table: 'suscripciones', column: 'id' })
    ]),
  }),
}
