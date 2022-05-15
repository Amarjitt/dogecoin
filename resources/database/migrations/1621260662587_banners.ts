import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Banners extends BaseSchema {
  protected tableName = 'banners'

  public async up () {
    
    this.schema.createTable(this.tableName, (table) => {
      
      table.bigIncrements('id').unsigned().notNullable().primary()
     
      table.bigInteger('business_id').unsigned().notNullable()
      // `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('title').notNullable()
      // `caption` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('caption').notNullable()
      // `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('url').notNullable()
      // `page` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('page').notNullable()
      // `status` tinyint(1) NOT NULL,
      table.boolean('status').notNullable()
      // `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('type').notNullable();
      // `thumb` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('thumb').defaultTo(null);
      // `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('icon').defaultTo(null)
      // `banner` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('banner').defaultTo(null)
      // `created_by` bigint(20) unsigned NOT NULL,
      table.bigInteger('created_by').unsigned().notNullable();
      // `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').nullable().defaultTo(null)
      // `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp('updated_at').nullable().defaultTo(null)
      // PRIMARY KEY (`id`),
      // KEY `banners_business_id_foreign` (`business_id`),
      table.index('business_id',`banners_business_id_foreign`)
      // table.foreign('business_id','banners_business_id_foreign').references('business.id').onDelete('CASCADE')
      // CONSTRAINT `banners_business_id_foreign` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`) ON DELETE CASCADE
      // ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      table.engine('InnoDB AUTO_INCREMENT=2')
      table.charset('utf8mb4')
      table.collate('utf8mb4_unicode_ci')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
