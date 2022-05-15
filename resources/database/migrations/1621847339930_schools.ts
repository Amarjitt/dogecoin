import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Schools extends BaseSchema {
  protected tableName = 'schools'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('name').notNullable().defaultTo(null)
      // table.string('last_name').notNullable().defaultTo(null)
      table.string('phone_number')
      table.string('address')
      table.string('school_code')
      table.string('email').unique()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
