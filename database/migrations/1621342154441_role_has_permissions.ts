import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RoleHasPermissions extends BaseSchema {
  protected tableName = 'role_has_permissions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `permission_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('permission_id').unsigned().notNullable()
      //   `role_id` bigint(20) unsigned NOT NULL,
      table.bigInteger('role_id').unsigned().notNullable()
      //   PRIMARY KEY (`permission_id`,`role_id`),
      table.primary([`permission_id`,`role_id`])
      //   KEY `role_has_permissions_role_id_foreign` (`role_id`),
      table.index('role_id','role_has_permissions_role_id_foreign')
        // CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
        // CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
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
