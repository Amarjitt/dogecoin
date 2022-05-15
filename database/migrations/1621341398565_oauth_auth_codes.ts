import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OauthAuthCodes extends BaseSchema {
  protected tableName = 'oauth_auth_codes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('id').notNullable().primary()
      //   `user_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('user_id').unsigned().notNullable()
      //   `client_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('client_id').unsigned().notNullable()
      //   `scopes` text COLLATE utf8mb4_unicode_ci,
      table.text('scopes')
      //   `revoked` tinyint(1) NOT NULL,
      table.boolean('revoked').notNullable()
      //   `expires_at` datetime DEFAULT NULL,
      table.dateTime('expires_at').defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   KEY `oauth_auth_codes_user_id_index` (`user_id`)
      table.index('user_id','oauth_auth_codes_user_id_index')
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
