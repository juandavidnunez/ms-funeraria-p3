import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import PromocionSuscripcion from './PromacionSuscripcion'

export default class Promocion extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column({ isPrimary: true })
  public descripcion: string
  @column({ isPrimary: true })
  public nombre: string


  @hasMany(() => PromocionSuscripcion, {
    foreignKey: 'promocion_id', 
  })
  public promocionSuscripciones: HasMany<typeof PromocionSuscripcion>
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
