import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Servicio from './Servicio'

export default class Sepultura extends BaseModel {
  public static table = 'sepulturas'
  @column({ isPrimary: true })
  public id: number

  @column()
  public ubicacion: string

  @column()
  public fecha_hora: DateTime

  @column()
  public servicio_id: number

  @belongsTo(() => Servicio, {
    foreignKey: 'servicio_id',
  })
  public servicio: BelongsTo<typeof Servicio>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
