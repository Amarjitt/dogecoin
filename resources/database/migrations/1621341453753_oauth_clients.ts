import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OauthClients extends BaseSchema {
  protected tableName = 'oauth_clients'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `user_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger('user_id').unsigned().defaultTo(null)
      //   `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('name').notNullable()
      //   `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('secret').defaultTo(null)
      //   `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('provider').defaultTo(null)
      //   `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
      table.text('redirect').notNullable()
      //   `personal_access_client` tinyint(1) NOT NULL,
      table.boolean('personal_access_client').notNullable()
      //   `password_client` tinyint(1) NOT NULL,
      table.boolean('password_client').notNullable()
      //   `revoked` tinyint(1) NOT NULL,
      table.boolean('revoked').notNullable()
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp('updated_at').nullable().defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   KEY `oauth_clients_user_id_index` (`user_id`)
      table.index('user_id','oauth_clients_user_id_index')
      // ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      table.engine('InnoDB AUTO_INCREMENT=2')
      table.charset('utf8mb4')
      table.collate('utf8mb4_unicode_ci')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
