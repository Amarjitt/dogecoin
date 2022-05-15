import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Discountables extends BaseSchema {
  protected tableName = 'discountables'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.foreign('discount_id','discountables_discount_id_foreign').references('discounts.id').onDelete('CASCADE')

    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
