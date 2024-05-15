import { DateTime } from 'luxon'
import { BaseModel, HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Usuario from './Usuario'

export default class Administrador extends BaseModel {
  public static table = 'administradores'
  @column({ isPrimary: true })
  public id: number

  @column()
  public usuario_id: number

  @hasOne(() => Usuario)
  public usuario: HasOne<typeof Usuario>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
