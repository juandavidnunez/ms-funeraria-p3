import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const beneficiarioValidation = {
    schema: schema.create({
        titular_id: schema.number([
          rules.required(),
          rules.exists({ table: 'titulares', column: 'id' }) // Asumiendo que 'titulares' es la tabla asociada al titular
        ]),
        cliente_id: schema.number([
          rules.required(),
          rules.exists({ table: 'clientes', column: 'id' }) // Asumiendo que 'clientes' es la tabla asociada al cliente
        ])
      })
} 
