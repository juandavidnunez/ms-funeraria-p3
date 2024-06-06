import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const suscripcionValidation = {
  schema: schema.create({
    fecha_inicio: schema.date({ format: 'yyyy-MM-dd HH:mm:ss' }, [
      rules.required()
    ]),
    fecha_fin: schema.date({ format: "yyyy-MM-dd" }, [
      rules.afterOrEqual('today')
    ]),
    numero_beneficiaros: schema.number([rules.required(), rules.range(0, 999999999)]),
    cliente_id: schema.number([
      rules.required(),
      rules.exists({ table: 'clientes', column: 'id' }), // Asumiendo que 'clientes' es la tabla asociada al cliente
    ]),
    plan_id: schema.number([
      rules.required(),
      rules.exists({ table: 'planes', column: 'id' }), // Asumiendo que 'planes' es la tabla asociada al plan
    ]),
  }),
}
