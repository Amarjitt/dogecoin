import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TaxRates extends BaseSchema {
  protected tableName = 'tax_rates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `business_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('business_id').unsigned().notNullable()
      //   `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('name').notNullable()
      //   `amount` double(22,4) NOT NULL,
      table.double('amount',22,4).notNullable()
      //   `is_tax_group` tinyint(1) NOT NULL DEFAULT '0',
      table.boolean('is_tax_group').notNullable().defaultTo('0')
      //   `created_by` bigint(20) unsigned NOT NULL,
      table.bigInteger('created_by').notNullable().unsigned()
      //   `deleted_at` timestamp NULL DEFAULT NULL,
      table.timestamp('deleted_at').nullable().defaultTo(null)
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp('updated_at').nullable().defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   KEY `tax_rates_business_id_foreign` (`business_id`),
      table.index('business_id','tax_rates_business_id_foreign')
      //   KEY `tax_rates_created_by_foreign` (`created_by`),
      table.index('created_by','tax_rates_created_by_foreign')
        // CONSTRAINT `tax_rates_business_id_foreign` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`) ON DELETE CASCADE,
        // CONSTRAINT `tax_rates_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE
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
