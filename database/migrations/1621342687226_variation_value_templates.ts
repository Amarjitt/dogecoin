import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class VariationValueTemplates extends BaseSchema {
  protected tableName = 'variation_value_templates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
      table.bigIncrements('id').unsigned().notNullable()
      //   `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('name').notNullable()
      //   `variation_template_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('variation_template_id').notNullable().unsigned()
      //   `created_at` timestamp NULL DEFAULT NULL,
      table.timestamp('created_at').nullable().defaultTo(null)
      //   `updated_at` timestamp NULL DEFAULT NULL,
      table.timestamp('updated_at').nullable().defaultTo(null)
      //   PRIMARY KEY (`id`),
      //   KEY `variation_value_templates_name_index` (`name`),
      table.index('name','variation_value_templates_name_index')
      //   KEY `variation_value_templates_variation_template_id_index` (`variation_template_id`),
      table.index('variation_template_id','variation_value_templates_variation_template_id_index')
        // CONSTRAINT `variation_value_templates_variation_template_id_foreign` FOREIGN KEY (`variation_template_id`) REFERENCES `variation_templates` (`id`) ON DELETE CASCADE
      // ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      table.engine('InnoDB AUTO_INCREMENT=2')
      table.charset('utf8mb4')
      table.collate('utf8mb4_unicode_ci')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
