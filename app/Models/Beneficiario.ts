import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'

export default class Beneficiario extends BaseModel {
  public static table = 'beneficiarios'
  @column({ isPrimary: true })
  public id: number

  @column()
  public titular_id: number

  @column()
  public cliente_id: number

  @hasOne(() => Cliente)
  public usuario: HasOne<typeof Cliente>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
