import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('name').notNullable()
      //   `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('email').notNullable()
      //   `email_verified_at` timestamp NULL DEFAULT NULL,
      table.timestamp('email_verified_at').nullable().defaultTo(null)
      //   `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('password').notNullable()
      //   `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('remember_token',100).defaultTo(null)
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp('updated_at').nullable().defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   UNIQUE KEY `users_email_unique` (`email`)
      table.index('email','users_email_unique')
      // ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      table.engine('InnoDB AUTO_INCREMENT=2')
      table.charset('utf8mb4')
      table.collate('utf8mb4_unicode_ci')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
