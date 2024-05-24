import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Usuario from './Usuario'

export default class Conductor extends BaseModel {
  public static table = 'conductores'
  @column({ isPrimary: true })
  public id: number

  @column()
  public licencia: string

  @column()
  public categoria_licencia: string

  @column()
  public expliracion_licencia: DateTime

  @column()
  public user_id: number

  @hasOne(() => Usuario)
  public usuario: HasOne<typeof Usuario>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
