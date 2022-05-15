import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Categories extends BaseSchema {
  protected tableName = 'categories'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.foreign('business_id','categories_business_id_foreign').references('business.id').onDelete('CASCADE')
      table.foreign('created_by','categories_created_by_foreign').references('users.id').onDelete('CASCADE')

    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
