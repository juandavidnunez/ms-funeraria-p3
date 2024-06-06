import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const conductorValidation = {
  schema: schema.create({
    licencia: schema.string([
      rules.required(),
      rules.maxLength(200)
    ]),
    categoria_licencia: schema.string([
      rules.required(),
      rules.maxLength(200)
    ]),
    expliracion_licencia: schema.date({ format: 'yyyy-MM-dd HH:mm:ss' }, [
      rules.required()
    ]),
    user_id: schema.number([
      rules.required(),
      rules.exists({ table: 'usuarios', column: 'id' }) // Asegúrate de ajustar la tabla y columna según corresponda
    ])
  })}
