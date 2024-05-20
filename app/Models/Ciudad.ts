import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Departamento from './Departamento'
import Sede from './Sede'

export default class Ciudad extends BaseModel {
  public static table = 'ciudades'
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public departamento_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Departamento, {
    foreignKey: 'departamento_id',
  })
  public departamento: BelongsTo<typeof Departamento>

  @hasMany(() => Sede, {
    foreignKey: 'ciudad_id',
  })
  public sedes: HasMany<typeof Sede>
}
