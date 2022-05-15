import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OauthAccessTokens extends BaseSchema {
  protected tableName = 'oauth_access_tokens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('id').notNullable().primary()
      //   `user_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger('user_id').unsigned().defaultTo(null)
      //   `client_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('client_id').unsigned().notNullable()
      //   `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('name').defaultTo(null)
      //   `scopes` text COLLATE utf8mb4_unicode_ci,
      table.text('scopes')
      //   `revoked` tinyint(1) NOT NULL,
      table.boolean('revoked').notNullable()
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp('updated_at').nullable().defaultTo(null)
      //   `expires_at` datetime DEFAULT NULL,
      table.timestamp('expires_at').defaultTo(null)
      //   PRIMARY KEY (`id`),
      
      //   KEY `oauth_access_tokens_user_id_index` (`user_id`)
      table.index('user_id','oauth_access_tokens_user_id_index')
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
