import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class VariationTemplates extends BaseSchema {
  protected tableName = 'variation_templates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
    //   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    table.bigIncrements('id').notNullable().primary()  
    //   `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
    table.string('name',191).notNullable()
    //   `business_id` int(10) unsigned NOT NULL,
    table.integer('business_id',10).notNullable().unsigned()
    //   `created_at` timestamp NULL DEFAULT NULL,
    table.timestamp('created_at').nullable().defaultTo(null)
    //   `updated_at` timestamp NULL DEFAULT NULL,
    table.timestamp('updated_at').nullable().defaultTo(null)
    //   PRIMARY KEY (`id`),
    //   KEY `variation_templates_business_id_foreign` (`business_id`)
    table.index('business_id','variation_templates_business_id_foreign')
    // ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    table.engine('InnoDB AUTO_INCREMENT=2')
      table.charset('utf8mb4')
      table.collate('utf8mb4_unicode_ci')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
