import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductVariations extends BaseSchema {
  protected tableName = 'product_variations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('name').notNullable()
      //   `product_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('product_id').unsigned().notNullable()
      //   `is_dummy` tinyint(1) NOT NULL DEFAULT '1',
      table.boolean('is_dummy').notNullable().defaultTo('1')
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp('updated_at').nullable().defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   KEY `product_variations_name_index` (`name`),
      table.index('name','product_variations_name_index')
      //   KEY `product_variations_product_id_index` (`product_id`),
      table.index('product_id','product_variations_product_id_index')
        // CONSTRAINT `product_variations_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
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
