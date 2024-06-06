import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const chatValidation = {
    schema: schema.create({
      Ej_servicio_id: schema.number([
        rules.required(),
        rules.exists({ table: 'ejecucion_servicios', column: 'id' })
      ]),
      })
} 
