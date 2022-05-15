import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Coupons extends BaseSchema {
  protected tableName = 'coupons'

  public async up () {
    this.schema.table(this.tableName, (table) => {
     //   `category_id` bigint(20) unsigned DEFAULT NULL,
     table.bigInteger('category_id').defaultTo(null).unsigned()
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
