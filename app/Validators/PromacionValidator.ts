import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PromocionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    descripcion: schema.string({}, [
      rules.required(),
      rules.maxLength(255),
    ]),
    nombre: schema.string({}, [
      rules.required(),
      rules.maxLength(255),
    ]),
  })

  public messages: CustomMessages = {
    'descripcion.required': 'La descripción es obligatoria',
    'descripcion.maxLength': 'La descripción no puede tener más de 255 caracteres',
    'nombre.required': 'El nombre es obligatorio',
    'nombre.maxLength': 'El nombre no puede tener más de 255 caracteres',
  }
}
