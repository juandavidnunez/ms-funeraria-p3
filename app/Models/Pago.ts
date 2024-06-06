import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Suscripcion from './Suscripcion'

export default class Pago extends BaseModel {
  public static table = 'pagos'
  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public fecha_pago: DateTime

  @column()
  public monto: number

  @column()
  public metodo_pago: string

  @column()
  public suscripcion_id: number

  @belongsTo(() => Suscripcion, {
    foreignKey: 'suscripcion_id',
  })
  public suscripcion: BelongsTo<typeof Suscripcion>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
