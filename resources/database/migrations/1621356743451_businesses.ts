
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Businesses extends BaseSchema {
  protected tableName = 'business'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      // `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('name').notNullable();
      //   `currency_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('currency_id').unsigned().notNullable()
      //   `start_date` date DEFAULT NULL,
      table.date('start_date').defaultTo(null)
      //   `tax_number_1` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('tax_number_1',100).notNullable()
      //   `tax_label_1` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('tax_label_1',10).notNullable()
      //   `tax_number_2` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('tax_number_2',100).defaultTo(null)
      //   `tax_label_2` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('tax_label_2',10).defaultTo(null)
      //   `default_profit_percent` double(5,2) NOT NULL DEFAULT '0.00',
      table.double('default_profit_percent',5,2).notNullable().defaultTo(0.00)
      //   `owner_id` bigint(20) unsigned NOT NULL,
      table.bigInteger(`owner_id`).unsigned().notNullable()
      //   `time_zone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Asia/Kolkata',
      table.string('time_zone').notNullable().defaultTo('Asia/Kolkata')
      //   `fy_start_month` tinyint(4) NOT NULL DEFAULT '1',
      table.boolean(`fy_start_month`).notNullable().defaultTo(1)
      //   `accounting_method` enum('fifo','lifo','avco') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'fifo',
      table.enum(`accounting_method`,['fifo','lifo','avco']).notNullable().defaultTo('fifo')
      //   `default_sales_discount` decimal(5,2) DEFAULT NULL,
      table.decimal(`default_sales_discount`,5,2).defaultTo(null)
      //   `sell_price_tax` enum('includes','excludes') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'includes',
      table.enum(`sell_price_tax`,['includes','excludes']).notNullable().defaultTo('includes')
      //   `logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('logo').defaultTo(null)
      //   `sku_prefix` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string(`sku_prefix`).defaultTo(null)
      //   `enable_tooltip` tinyint(1) NOT NULL DEFAULT '1',
      table.boolean(`enable_tooltip`).notNullable().defaultTo(1)
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp(`created_at`).nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp(`updated_at`).nullable().defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   KEY `businesses_currency_id_foreign` (`currency_id`),
      table.index(`currency_id`,`businesses_currency_id_foreign`)
      //   KEY `businesses_owner_id_foreign` (`owner_id`),
      table.index(`owner_id`,`businesses_owner_id_foreign`)
      //   CONSTRAINT `businesses_currency_id_foreign` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`),
      //   CONSTRAINT `businesses_owner_id_foreign` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
      table.foreign('owner_id','businesses_owner_id_foreign').references('users.id').onDelete('CASCADE')

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
