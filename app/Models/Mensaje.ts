import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Chat from './Chat'

export default class Mensaje extends BaseModel {
  public static table = 'mensajes'
  @column({ isPrimary: true })
  public id: number

  @column()
  public contenido: string

  @column.dateTime()
  public fecha_mensaje: DateTime

  @column()
  public chat_id: number

  @column()
  public user_id: string

  @belongsTo(() => Chat, {
    foreignKey: 'chat_id',
  })
  public chats: BelongsTo<typeof Chat>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
