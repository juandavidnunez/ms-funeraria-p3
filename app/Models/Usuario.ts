import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Administrador from './Administrador'
import Cliente from './Cliente'
import Conductor from './Conductor'

export default class Usuario extends BaseModel {
  
  @column()
  public nombre: string
  
  @column()
  public apellido: string

  @column()
  public edad: number

  @column()
  public cedula: String

  @column()
  public telefono: String

  @column()
  public email: string

  @column()
  public password: string

  @hasMany(() => Administrador, {
    foreignKey: 'cliente_id',
  })
  public administrador: HasMany<typeof Administrador>

  @hasMany(() => Cliente, {
    foreignKey: 'cliente_id',
  })
  public cliente: HasMany<typeof Cliente>

  @hasMany(() => Conductor, {
    foreignKey: 'cliente_id',
  })
  public conductor: HasMany<typeof Conductor>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
