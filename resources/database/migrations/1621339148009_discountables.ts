import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Discountables extends BaseSchema {
  protected tableName = 'discountables'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable().primary()
      //   `discount_id` bigint(20) unsigned DEFAULT NULL,
      table.bigInteger(`discount_id`).unsigned().defaultTo(null)
      //   `from` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('from',191).defaultTo(null)
      //   `to` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      table.string('to',191).defaultTo(null)
      //   `percentage` int(11) DEFAULT '0',
      table.integer('percentage',11).defaultTo('0')
      //   `discount_amount` decimal(22,4) NOT NULL DEFAULT '0.0000',
      table.decimal('discount_amount',22,4).notNullable().defaultTo('0.0000')
      //   `applicable_in_spg` tinyint(1) DEFAULT '0',
      table.boolean(`applicable_in_spg`).defaultTo('0')
      //   `applicable_in_cg` tinyint(1) DEFAULT '0',
      table.boolean(`applicable_in_cg`).defaultTo('0')
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp(`created_at`).defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp('updated_at').nullable().defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   KEY `discountables_discount_id_foreign` (`discount_id`),
      table.index(`discount_id`,`discountables_discount_id_foreign`)
      //   CONSTRAINT `discountables_discount_id_foreign` FOREIGN KEY (`discount_id`) REFERENCES `discounts` (`id`) ON DELETE CASCADE
      // table.foreign('discount_id','discountables_discount_id_foreign').references('discounts.id').onDelete('CASCADE')
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
