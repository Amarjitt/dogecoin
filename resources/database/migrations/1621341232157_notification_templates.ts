import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class NotificationTemplates extends BaseSchema {
  protected tableName = 'notification_templates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `business_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('business_id').unsigned().notNullable()
      //   `email_subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('email_subject').notNullable()
      //   `cc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('cc').notNullable()
      //   `bcc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('bcc').notNullable()
      //   `email_body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
      table.text('email_body', 'longtext').notNullable()
      //   `created_by` bigint(20) unsigned NOT NULL,
      table.bigInteger('created_by').unsigned().notNullable()
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp('updated_at').nullable().defaultTo(null)
      //   PRIMARY KEY (`id`),
      table.index('business_id','notification_template_business_id_foreign')
      //   KEY `notification_template_business_id_foreign` (`business_id`),

      //   KEY `notification_template_created_by_foreign` (`created_by`),
      table.index('created_by','notification_template_created_by_foreign')
      //   CONSTRAINT `notification_template_business_id_foreign` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`) ON DELETE CASCADE,
      //   CONSTRAINT `notification_template_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE
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
