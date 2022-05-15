import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Categories extends BaseSchema {
  protected tableName = 'categories'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('name').notNullable();
      //   `business_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger(`business_id`).unsigned().defaultTo(null)
      //   `short_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string(`short_code`).defaultTo(null)
      //   `parent_id` int(11) NOT NULL,
      table.integer(`parent_id`,11).notNullable()
      //   `thumb` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
      table.string(`thumb`).notNullable().defaultTo('')
      //   `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
      table.string(`description`).notNullable().defaultTo('')
      //   `created_by` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger(`created_by`).unsigned().defaultTo(null)
      //   `deleted_at` timestamp NULL DEFAULT NULL,
      table.timestamp('deleted_at').nullable().defaultTo(null)
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp(`created_at`).nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp(`updated_at`).nullable().defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   KEY `categories_business_id_foreign` (`business_id`),
      table.index('business_id',`categories_business_id_foreign`)
      //   KEY `categories_created_by_foreign` (`created_by`),
      table.index('created_by',`categories_created_by_foreign`)
      //   CONSTRAINT `categories_business_id_foreign` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`) ON DELETE CASCADE,
      table.foreign('business_id','categories_business_id_foreign').references('business.id').onDelete('CASCADE')

      //   CONSTRAINT `categories_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE
      table.foreign('created_by','categories_created_by_foreign').references('users.id').onDelete('CASCADE')

      // ) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      table.engine('InnoDB AUTO_INCREMENT=2')
      table.charset('utf8mb4')
      table.collate('utf8mb4_unicode_ci')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
