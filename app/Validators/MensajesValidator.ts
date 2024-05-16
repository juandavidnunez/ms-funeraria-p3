import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const mensajeValidation = {
    schema: schema.create({
        contenido: schema.string({}, [
            rules.required(),
            rules.maxLength(3000)
          ]),
        chat_id: schema.number([
          rules.required(),
          rules.exists({ table: 'chats', column: 'id' }) // Asegúrate de ajustar la tabla y columna según corresponda
        ]),
      })
      
}