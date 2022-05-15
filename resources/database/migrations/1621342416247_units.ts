import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Units extends BaseSchema {
  protected tableName = 'units'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `business_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('business_id').unsigned().notNullable()
      //   `actual_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('actual_name').notNullable()
      //   `short_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('short_name').notNullable()
      //   `allow_decimal` tinyint(1) NOT NULL,
      table.boolean('allow_decimal').notNullable()
      //   `created_by` bigint(20) unsigned NOT NULL,
      table.bigInteger('created_by').notNullable().unsigned()
      //   `deleted_at` timestamp NULL DEFAULT NULL,
      table.timestamp('deleted_at').nullable().defaultTo(null)
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp('updated_at').nullable().defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   KEY `units_business_id_foreign` (`business_id`),
      table.index('business_id','units_business_id_foreign')
      //   KEY `units_created_by_foreign` (`created_by`),
      table.index('created_by','units_created_by_foreign')
        // CONSTRAINT `units_business_id_foreign` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`) ON DELETE CASCADE,
        // CONSTRAINT `units_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE
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
