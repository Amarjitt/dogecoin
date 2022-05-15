import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Teachers extends BaseSchema {
  protected tableName = 'teachers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('first_name').notNullable().defaultTo(null)
      table.string('last_name').notNullable().defaultTo(null)
      table.string('phone_number')
      table.string('email').unique()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
