import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Titular from './Titular'

export default class Beneficiario extends BaseModel {
  public static table = 'beneficiarios'
  @column({ isPrimary: true })
  public id: number

  @column()
  public activado: boolean

  @column()
  public titular_id: number

  @column()
  public cliente_id: number

  @belongsTo(() => Titular, {
    foreignKey: 'titular_id'
  })
  public titular: BelongsTo<typeof Titular>

  @belongsTo(() => Cliente, {
    foreignKey: 'cliente_id'
  })
  public cliente: BelongsTo<typeof Cliente>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
