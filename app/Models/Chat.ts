import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import EjecucionServicio from './EjecucionServicio'
import Mensaje from './Mensaje'

export default class Chat extends BaseModel {
  public static table = 'chats'
  @column({ isPrimary: true })
  public id: number

  @column()
  public Ej_servicio_id: number

  @belongsTo(() => EjecucionServicio, {
    foreignKey: 'Ej_servicio_id',
  })
  public ejecicuionservicios: BelongsTo<typeof EjecucionServicio>

  @hasMany(() => Mensaje, {
    foreignKey: 'chat_id',
  })
  public mensajes: HasMany<typeof Mensaje>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
