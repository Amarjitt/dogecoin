import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Brands extends BaseSchema {
  protected tableName = 'brands'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      // CREATE TABLE IF NOT EXISTS `brands` (
      //   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `business_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('business_id').unsigned().notNullable();
      //   `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('name').notNullable();
      //   `thumb` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('thumb').defaultTo(null)
      //   `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('icon').defaultTo(null)
      //   `banner` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('banner').defaultTo(null)
      //   `description` text COLLATE utf8mb4_unicode_ci,
      table.text('discription')
      //   `created_by` bigint(20) unsigned NOT NULL,
      table.bigInteger('created_by').unsigned().notNullable()
      //   `deleted_at` timestamp NULL DEFAULT NULL,
      table.timestamp('deleted_at').nullable().defaultTo(null)
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp('updated_at').nullable().defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   KEY `brands_business_id_foreign` (`business_id`),
      table.index('business_id',`banners_business_id_foreign`)
      //   KEY `brands_created_by_foreign` (`created_by`),
      table.index('created_by',`banners_created_by_foreign`)
      //   CONSTRAINT `brands_business_id_foreign` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`) ON DELETE CASCADE,
      // table.foreign('business_id','brands_business_id_foreign').references('business.id').onDelete('CASCADE')
      
      //   CONSTRAINT `brands_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE
      // table.foreign('created_by','brands_created_by_foreign').references('users.id').onDelete('CASCADE')

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
