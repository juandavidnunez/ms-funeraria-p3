import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PromocionSuscripcionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    descuento: schema.string({}, [
      rules.required(),
      rules.maxLength(255),
    ]),
    promocion_id: schema.number([
      rules.exists({ table: 'promocions', column: 'id' }),
    ]),
    suscripcion_id: schema.number([
      rules.exists({ table: 'suscripcions', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    'descuento.required': 'El descuento es obligatorio',
    'descuento.maxLength': 'El descuento no puede tener más de 255 caracteres',
    'promocion_id.exists': 'La promoción especificada no existe',
    'suscripcion_id.exists': 'La suscripción especificada no existe',
  }
}
