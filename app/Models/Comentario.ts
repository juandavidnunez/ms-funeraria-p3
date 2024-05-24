import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import EjecucionServicio from './EjecucionServicio'

export default class Comentario extends BaseModel {
  public static table = 'comentarios'
  @column({ isPrimary: true })
  public id: number

  @column()
  public contenido: string

  @column()
  public Ej_servicio_id: number

  @belongsTo(() => EjecucionServicio, {
    foreignKey: 'Ej_servicio_id',
  })
  public EjecucionServicios: BelongsTo<typeof EjecucionServicio>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
