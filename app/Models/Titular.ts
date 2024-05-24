import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Beneficiario from './Beneficiario'
import Cliente from './Cliente'

export default class Titular extends BaseModel {
  public static table = 'titulares'
  @column({ isPrimary: true })
  public id: number

  @column()
  public activo: boolean

  @column()
  public cliente_id: number

  @belongsTo(() => Cliente, {
    foreignKey: 'client_id'
  })
  public client: BelongsTo<typeof Cliente>

  @hasMany(()=>Beneficiario,{
    foreignKey: 'titular_id',
  })
  public benericiarios:HasMany<typeof Beneficiario>
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
