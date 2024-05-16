import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'desplazamientos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.dateTime('fecha').notNullable()
      table.integer('id_aereopuerto').notNullable()

      //ForeingKey
      table.integer('conductor_id').unsigned().references('conductor.id').notNullable()
      table.integer('feretro_id').unsigned().references('ferero.id').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
