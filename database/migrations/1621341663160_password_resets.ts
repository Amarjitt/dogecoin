import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PasswordResets extends BaseSchema {
  protected tableName = 'password_resets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('email').notNullable()
      //   `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('token').notNullable()
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').nullable().defaultTo(null)
      //   KEY `password_resets_email_index` (`email`)
      table.index('email','password_resets_email_index')
      // ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      table.engine('InnoDB AUTO_INCREMENT=2')
      table.charset('utf8mb4')
      table.collate('utf8mb4_unicode_ci')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
