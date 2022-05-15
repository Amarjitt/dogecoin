import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OauthPersonalAccessClients extends BaseSchema {
  protected tableName = 'oauth_personal_access_clients'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `client_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('client_id').unsigned().notNullable()
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp('updated_at').nullable().defaultTo(null)
      //   PRIMARY KEY (`id`)
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
