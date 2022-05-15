import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Business extends BaseSchema {
  protected tableName = 'business'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.foreign('currency_id','businesses_currency_id_foreign').references('currencies.id').onDelete('CASCADE')
      table.foreign('owner_id','businesses_owner_id_foreign').references('users.id').onDelete('CASCADE')

    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
