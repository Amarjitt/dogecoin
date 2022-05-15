import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Variations extends BaseSchema {
  protected tableName = 'variations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('name').notNullable()
      //   `product_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('product_id').notNullable().unsigned()
      //   `sub_sku` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('sub_sku').defaultTo(null)
      //   `product_variation_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('product_variation_id').unsigned().notNullable()
      //   `default_purchase_price` decimal(22,4) DEFAULT NULL,
      table.decimal('default_purchase_price',22,4).defaultTo(null)
      //   `dpp_inc_tax` decimal(22,4) NOT NULL DEFAULT '0.0000',
      table.decimal('dpp_inc_tax',22,4).notNullable().defaultTo('0.0000')
      //   `profit_percent` decimal(22,4) NOT NULL DEFAULT '0.0000',
      table.decimal('profit_percent',22,4).notNullable().defaultTo('0.0000')
      //   `default_sell_price` decimal(22,4) DEFAULT NULL,
      table.decimal('default_sell_price',22,4).defaultTo(null)
      //   `sell_price_inc_tax` decimal(22,4) DEFAULT NULL COMMENT 'Sell price including tax',
      table.decimal('sell_price_inc_tax',22,4).defaultTo(null).comment('Sell price including tax')
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').defaultTo(null).nullable()
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp('updated_at').defaultTo(null).nullable()
      //   `deleted_at` timestamp NULL DEFAULT NULL,
      table.timestamp('deleted_at').defaultTo(null).nullable()
      //   PRIMARY KEY (`id`),
      //   KEY `variations_product_id_foreign` (`product_id`),
      table.index('product_id','variations_product_id_foreign')
      //   KEY `variations_product_variation_id_foreign` (`product_variation_id`),
      table.index('product_variation_id','variations_product_variation_id_foreign')
      //   KEY `variations_name_index` (`name`),
      table.index('name','variations_name_index')
      //   KEY `variations_sub_sku_index` (`sub_sku`),
      table.index('sub_sku','variations_sub_sku_index')
        // CONSTRAINT `variations_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
        // CONSTRAINT `variations_product_variation_id_foreign` FOREIGN KEY (`product_variation_id`) REFERENCES `product_variations` (`id`) ON DELETE CASCADE
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
