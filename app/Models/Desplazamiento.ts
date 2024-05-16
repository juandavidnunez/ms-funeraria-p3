import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Conductor from './Conductor'
import Feretro from './Feretro'

export default class Desplazamiento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fecha: DateTime

  @column()
  public id_aereopuerto: number

  @column()
  public conductor_id: number

  @column()
  public feretro_id: number

  // Agrega la propiedad airportName
  @column()
  public airportName: string

  @belongsTo(() => Conductor, {
    foreignKey: 'conductor_id',
  })
  public servicio: BelongsTo<typeof Conductor>

  @belongsTo(() => Feretro, {
    foreignKey: 'feretro_id',
  })
  public feretro: BelongsTo<typeof Feretro>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
