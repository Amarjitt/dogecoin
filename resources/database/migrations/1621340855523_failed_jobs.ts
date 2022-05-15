import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FailedJobs extends BaseSchema {
  protected tableName = 'failed_jobs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('uuid').notNullable()
      //   `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
      table.text('connection').notNullable()
      //   `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
      table.text('queue').notNullable()
      //   `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
      table.text('payload', 'longtext').notNullable()
      //   `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
      table.text('exception', 'longtext').notNullable()
      //   `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      table.timestamp('failed_at').notNullable().defaultTo(this.now())
      //   PRIMARY KEY (`id`),
      //   UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
      table.index(`uuid`,`failed_jobs_uuid_unique`)
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
