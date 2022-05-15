import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Coupons extends BaseSchema {
  protected tableName = 'coupons'

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
      //   `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('code').notNullable()
      //   `amount` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('amount').notNullable()
      //   `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('type').notNullable()
      //   `category_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger('category_id').defaultTo(null)
      //   `sub_category_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger(`sub_category_id`).unsigned().defaultTo(null)
      //   `coupon_validity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string(`coupon_validity`).notNullable()
      //   `created_by` bigint(20) unsigned NOT NULL,
      table.bigInteger('created_by').unsigned().notNullable()
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp(`created_at`).nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp(`updated_at`).nullable().defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   KEY `coupons_business_id_foreign` (`business_id`),
      table.index(`business_id`,`coupons_business_id_foreign`)
      //   KEY `coupons_category_id_foreign` (`category_id`),
      table.index(`category_id`,`coupons_category_id_foreign`)
      //   KEY `coupons_sub_category_id_foreign` (`sub_category_id`),
      table.index(`sub_category_id`,`coupons_sub_category_id_foreign`)
      //   KEY `coupons_created_by_foreign` (`created_by`),
      table.index(`created_by`,`coupons_created_by_foreign`)
      //   CONSTRAINT `coupons_business_id_foreign` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`) ON DELETE CASCADE,
        // CONSTRAINT `coupons_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
      // table.foreign('category_id','coupons_category_id_foreign').references('categories.id').onDelete('CASCADE')
      // table.foreign('business_id','coupons_business_id_foreign').references('business.id').onDelete('CASCADE')
      // table.foreign('created_by','coupons_created_by_foreign').references('users.id').onDelete('CASCADE')
      // table.foreign('sub_category_id','coupons_sub_category_id_foreign').references('categories.id').onDelete('CASCADE')

      //   CONSTRAINT `coupons_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,

      //   CONSTRAINT `coupons_sub_category_id_foreign` FOREIGN KEY (`sub_category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE

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
