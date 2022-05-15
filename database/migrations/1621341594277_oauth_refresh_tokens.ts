import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OauthRefreshTokens extends BaseSchema {
  protected tableName = 'oauth_refresh_tokens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('id',100).notNullable().primary()
      //   `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('access_token_id',100).notNullable()
      //   `revoked` tinyint(1) NOT NULL,
      table.boolean('revoked').notNullable()
      //   `expires_at` datetime DEFAULT NULL,
      table.dateTime('expires_at').defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
      table.index('access_token_id','oauth_refresh_tokens_access_token_id_index')
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
