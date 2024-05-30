import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Promocion from './Promocion'
import Suscripcion from './Suscripcion'

export default class PromocionSuscripcion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descuento: string
 
  @belongsTo(() => Promocion, {
    foreignKey: 'promocion_id',
  })
  public promocion: BelongsTo<typeof Promocion>
  @belongsTo(() => Suscripcion, {
    foreignKey: 'suscripcion_id',
  })
  public suscripcion: BelongsTo<typeof Suscripcion>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
