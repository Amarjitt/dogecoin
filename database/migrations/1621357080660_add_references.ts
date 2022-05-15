import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Banners extends BaseSchema {
  protected tableName = 'banners'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.foreign('business_id','banners_business_id_foreign').references('business.id').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
