import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  HasMany,
  HasOne,
  belongsTo,
  column,
  hasMany,
  hasOne,
} from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Servicio from './Servicio'
import Comentario from './Comentario'
import Chat from './Chat'

export default class EjecucionServicio extends BaseModel {
  public static table = 'ejecucion_servicios'
  @column({ isPrimary: true })
  public id: number

  @column()
  public descripcion: string

  @column()
  public servicio_id: number

  @column()
  public cliente_id: number

  @belongsTo(() => Servicio, {
    foreignKey: 'servicio_id',
  })
  public servicio: BelongsTo<typeof Servicio>

  @belongsTo(() => Cliente, {
    foreignKey: 'cliente_id',
  })
  public cliente: BelongsTo<typeof Cliente>

  @hasMany(() => Comentario, {
    foreignKey: 'Ej_servicio_id',
  })
  public comentarios: HasMany<typeof Comentario>

  @hasOne(() => Chat, {
    foreignKey: 'Ej_servicio_id',
  })
  public chats: HasOne<typeof Chat>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
