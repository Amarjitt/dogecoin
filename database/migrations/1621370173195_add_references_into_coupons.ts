import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Coupons extends BaseSchema {
  protected tableName = 'coupons'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      // table.foreign('category_id','coupons_category_id_foreign').references('categories.id').onDelete('CASCADE')
      table.foreign('business_id','coupons_business_id_foreign').references('business.id').onDelete('CASCADE')
      table.foreign('created_by','coupons_created_by_foreign').references('users.id').onDelete('CASCADE')
      table.foreign('sub_category_id','coupons_sub_category_id_foreign').references('categories.id').onDelete('CASCADE')

    })
    
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
