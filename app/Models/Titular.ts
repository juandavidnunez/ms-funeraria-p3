import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Usuario from './Usuario'
import Beneficiario from './Beneficiario'

export default class Titular extends BaseModel {
  public static table = 'titulares'
  @column({ isPrimary: true })
  public id: number

  @column()
  public cliente_id: number

  @column()
  public usuario_id: number

  @hasOne(() => Usuario)
  public usuario: HasOne<typeof Usuario>
  @hasMany(()=>Beneficiario,{
    foreignKey: 'titular_id',
  })
  public benericiarios:HasMany<typeof Beneficiario>
  



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
