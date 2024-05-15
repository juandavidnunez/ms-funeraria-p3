import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Usuario from './Usuario'

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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
