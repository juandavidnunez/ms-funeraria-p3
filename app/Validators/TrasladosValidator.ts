import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const trasladoValidation = {
  schema: schema.create({
    origen: schema.string({}, [
      rules.required(),
      rules.maxLength(30)
    ]),
    destino: schema.string({}, [
      rules.required(),
      rules.maxLength(30)
    ]),
    fecha_hora: schema.string({}, [
      rules.required(),
      // Validar el formato de fecha y hora personalizado
      rules.regex(/^(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2})$/)
    ]),
    servicio_id: schema.number([
      rules.required(),
      rules.exists({ table: 'servicios', column: 'id' })
    ])
  })
}

