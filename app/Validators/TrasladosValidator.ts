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
    fecha: schema.date({ format: "yyyy-MM-dd" }, [
      rules.afterOrEqual('today')
    ]),
    servicio_id: schema.number([
      rules.required(),
      rules.exists({ table: 'servicios', column: 'id' })
    ])
  })
}

