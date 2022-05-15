import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Migrations extends BaseSchema {
  protected tableName = 'migrations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      // table.increments('id')
      // table.timestamps(true)
      //       `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
      
      table.increments('id', { primaryKey: true }).unsigned().notNullable().primary()
      //   `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
      table.string('migration').notNullable()
      //   `batch` int(11) NOT NULL,
      table.integer('batch',11).notNullable()
      //   PRIMARY KEY (`id`)
      // ) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      table.engine('InnoDB AUTO_INCREMENT=2')
      table.charset('utf8mb4')
      table.collate('utf8mb4_unicode_ci')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
