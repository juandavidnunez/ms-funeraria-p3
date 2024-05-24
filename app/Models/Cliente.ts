import { DateTime } from 'luxon'
import { BaseModel, HasMany, HasOne, column, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Titular from './Titular'
import Beneficiario from './Beneficiario'
import EjecucionServicio from './EjecucionServicio'
import Suscripcion from './Suscripcion'
import Usuario from './Usuario'

export default class Cliente extends BaseModel {
  public static table = 'clientes'
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @hasOne(() => Usuario)
  public usuario: HasOne<typeof Usuario>

  @hasOne(() => Titular, {
    foreignKey: 'cliente_id',
  })
  public titular: HasOne<typeof Titular>

  @hasOne(() => Beneficiario, {
    foreignKey: 'cliente_id',
  })
  public beneficiarios: HasOne<typeof Beneficiario>

  @hasMany(() => EjecucionServicio, {
    foreignKey: 'cliente_id',
  })
  public ejecucionservicios: HasMany<typeof EjecucionServicio>

  @hasMany(() => Suscripcion, {
    foreignKey: 'cliente_id',
  })
  public suscripciones: HasMany<typeof Suscripcion>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
