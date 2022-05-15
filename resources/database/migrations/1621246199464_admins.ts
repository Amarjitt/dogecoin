import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Admins extends BaseSchema {
  protected tableName = 'admins'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').unsigned().notNullable().primary()
      table.string('name').notNullable()
      table.string('email').notNullable().unique('admins_email_unique')
      table.timestamp('email_verified_at').nullable().defaultTo(null)
      table.string('password').notNullable()
      table.string('remember_token',100).defaultTo(null)
      table.collate('utf8_unicode_ci')
      // `created_at` timestamp NULL DEFAULT NULL,
      // table.timestamp('created_at').nullable().defaultTo(null)
      // `updated_at` timestamp NULL DEFAULT NULL,
      // table.timestamp('updated_at').nullable().defaultTo(null)
      // PRIMARY KEY (`id`),
      // UNIQUE KEY `admins_email_unique` (`email`)
      
      table.timestamps(true,true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
  public async createMany(){

  }
}
