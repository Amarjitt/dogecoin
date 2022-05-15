import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Currencies extends BaseSchema {
  protected tableName = 'currencies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `country` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('country',100).notNullable()
      //   `currency` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string(`currency`,100).notNullable()
      //   `code` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string(`code`,25).notNullable()
      //   `symbol` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string(`symbol`,25).notNullable()
      //   `thousand_separator` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string(`thousand_separator`,10).notNullable()
      //   `decimal_separator` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string(`decimal_separator`,10).notNullable()
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp(`created_at`).nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp(`updated_at`).nullable().defaultTo(null)
      //   PRIMARY KEY (`id`)
      // ) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      table.engine('InnoDB AUTO_INCREMENT=2')
      table.charset('utf8mb4')
      table.collate('utf8mb4_unicode_ci')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
