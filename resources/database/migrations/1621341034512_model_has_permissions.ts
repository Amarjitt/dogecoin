import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ModelHasPermissions extends BaseSchema {
  protected tableName = 'model_has_permissions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `permission_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('permission_id').unsigned().notNullable()
      //   `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('model_type').notNullable()
      //   `model_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('model_id').unsigned().notNullable()
      //   PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
      table.primary([`permission_id`,`model_id`,`model_type`])
      //   KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`),
      table.index([`model_id`,`model_type`],`model_has_permissions_model_id_model_type_index`)
      //   CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
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
