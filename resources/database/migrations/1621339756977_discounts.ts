import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Discounts extends BaseSchema {
  protected tableName = 'discounts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `business_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger(`business_id`).unsigned().defaultTo(null)
      //   `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('name').notNullable()
      //   `brand_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger('brand_id').unsigned().defaultTo(null)
      //   `category_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger('category_id').unsigned().defaultTo(null)
      //   `sub_category_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger('sub_category_id').unsigned().defaultTo(null)
      //   `customer_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger('customer_id').unsigned().defaultTo(null)
      //   `product_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger(`product_id` ).unsigned().defaultTo(null)
      //   `discount_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string(`discount_type` ).defaultTo(null)
      //   `slab` int(11) DEFAULT '0',
      table.integer('slab',11).defaultTo('0')
      //   `discount_amount` decimal(22,4) NOT NULL DEFAULT '0.0000',
      table.decimal(`discount_amount`,22,4).notNullable().defaultTo('0.0000')
      //   `starts_at` datetime DEFAULT NULL,
      table.dateTime('starts_at').defaultTo(null)
      //   `ends_at` datetime DEFAULT NULL,
      table.dateTime('ends_at').defaultTo(null)
      //   `is_active` tinyint(1) NOT NULL DEFAULT '1',
      table.boolean('is_active').notNullable().defaultTo('1')
      //   `applicable_in_spg` tinyint(1) DEFAULT '0',
      table.boolean(`applicable_in_spg`).defaultTo('0')
      //   `applicable_in_cg` tinyint(1) DEFAULT '0',
      table.boolean(`applicable_in_cg`).defaultTo('0')
      //   `created_by` bigint(20) unsigned NOT NULL,
      table.bigInteger('created_by').unsigned().notNullable()
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp(`updated_at`).nullable().defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   KEY `discounts_business_id_foreign` (`business_id`),
      table.index(`business_id`,`discounts_business_id_foreign`)
      //   KEY `discounts_brand_id_foreign` (`brand_id`),
      table.index(`brand_id`,`discounts_brand_id_foreign`)
      //   KEY `discounts_category_id_foreign` (`category_id`),
      table.index(`category_id`,`discounts_category_id_foreign`)
      //   KEY `discounts_sub_category_id_foreign` (`sub_category_id`),
      table.index(`sub_category_id`,`discounts_sub_category_id_foreign`)
      //   KEY `discounts_product_id_foreign` (`product_id`),
      table.index(`product_id`,`discounts_product_id_foreign`)
      //   KEY `discounts_created_by_foreign` (`created_by`),
      table.index(`created_by`,`discounts_created_by_foreign`)
      //   CONSTRAINT `discounts_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE,
      table.foreign('brand_id','discounts_brand_id_foreign').references('brands.id').onDelete('CASCADE')
      //   CONSTRAINT `discounts_business_id_foreign` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`) ON DELETE CASCADE,
      table.foreign('business_id','discounts_business_id_foreign').references('business.id').onDelete('CASCADE')      
      //   CONSTRAINT `discounts_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
      table.foreign('category_id','discounts_category_id_foreign').references('categories.id').onDelete('CASCADE')
      //   CONSTRAINT `discounts_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
      table.foreign('brand_id','discounts_brand_id_foreign').references('brands.id').onDelete('CASCADE')
      //   CONSTRAINT `discounts_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
      table.foreign('product_id','discounts_product_id_foreign').references('products.id').onDelete('CASCADE')
      //   CONSTRAINT `discounts_sub_category_id_foreign` FOREIGN KEY (`sub_category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
      table.foreign('sub_category_id','discounts_sub_category_id_foreign').references('categories.id').onDelete('CASCADE')
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
