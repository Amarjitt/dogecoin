import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('name').notNullable()
      //   `business_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('business_id').unsigned().notNullable()
      //   `type` enum('single','variable') COLLATE utf8mb4_unicode_ci NOT NULL,
      table.enum('type',['single','variable']).notNullable()
      //   `unit_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('unit_id').notNullable().unsigned()
      //   `brand_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger('brand_id').defaultTo(null).unsigned()
      //   `category_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger('category_id').unsigned().defaultTo(null)
      //   `sub_category_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger('sub_category_id').unsigned().defaultTo(null)
      //   `tax` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger('tax').unsigned().defaultTo(null)
      //   `tax_type` enum('inclusive','exclusive') COLLATE utf8mb4_unicode_ci NOT NULL,
      table.enum('tax_type',['inclusive','exclusive']).notNullable()
      //   `enable_stock` tinyint(1) NOT NULL DEFAULT '0',
      table.boolean('enable_stock').notNullable().defaultTo('0')
      //   `alert_quantity` decimal(22,4) NOT NULL DEFAULT '0.0000',
      table.decimal('alert_quantity',22,4).notNullable().defaultTo('0.0000')
      //   `sku` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('sku').notNullable()
      //   `barcode_type` enum('C39','C128','EAN-13','EAN-8','UPC-A','UPC-E','ITF-14') COLLATE utf8mb4_unicode_ci NOT NULL,
      table.enum('barcode_type',['C39','C128','EAN-13','EAN-8','UPC-A','UPC-E','ITF-14']).notNullable()
      //   `created_by` bigint(20) unsigned NOT NULL,
      table.bigInteger('created_by').unsigned().notNullable()
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp('updated_at').nullable().defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   KEY `products_brand_id_foreign` (`brand_id`),
      table.index('brand_id','products_brand_id_foreign')
      //   KEY `products_category_id_foreign` (`category_id`),
      table.index('category_id','products_category_id_foreign')
      //   KEY `products_sub_category_id_foreign` (`sub_category_id`),
      table.index('sub_category_id','products_sub_category_id_foreign')
      //   KEY `products_tax_foreign` (`tax`),
      table.index('tax','products_tax_foreign')
      //   KEY `products_name_index` (`name`),
      table.index('name','products_name_index')
      //   KEY `products_business_id_index` (`business_id`),
      table.index('business_id','products_business_id_index')
      //   KEY `products_unit_id_index` (`unit_id`),
      table.index('unit_id','products_unit_id_index')
      //   KEY `products_created_by_index` (`created_by`),
      table.index('created_by','products_created_by_index')
        // CONSTRAINT `products_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE,
        // CONSTRAINT `products_business_id_foreign` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`) ON DELETE CASCADE,
        // CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
        // CONSTRAINT `products_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
        // CONSTRAINT `products_sub_category_id_foreign` FOREIGN KEY (`sub_category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
        // CONSTRAINT `products_tax_foreign` FOREIGN KEY (`tax`) REFERENCES `tax_rates` (`id`),
        // CONSTRAINT `products_unit_id_foreign` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON DELETE CASCADE
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
