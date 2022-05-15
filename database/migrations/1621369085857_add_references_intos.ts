import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Brands extends BaseSchema {
  protected tableName = 'brands'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.foreign('created_by','brands_created_by_foreign').references('users.id').onDelete('CASCADE')
      table.foreign('business_id','brands_business_id_foreign').references('business.id').onDelete('CASCADE')

    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
