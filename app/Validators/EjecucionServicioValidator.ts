import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ejecucionServicioValidation = {
    schema: schema.create({
        descripcion: schema.string([
          rules.required(),
          rules.maxLength(200)
        ]),
        servicio_id: schema.number([
          rules.exists({ table: 'servicios', column: 'id' })
      ]),
        cliente_id: schema.number([
          rules.exists({ table: 'clientes', column: 'id' })
      ]),
      })
      
}