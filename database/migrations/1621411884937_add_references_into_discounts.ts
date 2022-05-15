import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Discounts extends BaseSchema {
  protected tableName = 'discounts'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      //   CONSTRAINT `discounts_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE,
      table.foreign('brand_id','discounts_brand_id_foreign').references('brands.id').onDelete('CASCADE')
      //   CONSTRAINT `discounts_business_id_foreign` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`) ON DELETE CASCADE,
      table.foreign('business_id','discounts_business_id_foreign').references('business.id').onDelete('CASCADE')      
      //   CONSTRAINT `discounts_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
      table.foreign('category_id','discounts_category_id_foreign').references('categories.id').onDelete('CASCADE')
      //   CONSTRAINT `discounts_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
            table.foreign('product_id','discounts_product_id_foreign').references('products.id').onDelete('CASCADE')
      //   CONSTRAINT `discounts_sub_category_id_foreign` FOREIGN KEY (`sub_category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
      table.foreign('sub_category_id','discounts_sub_category_id_foreign').references('categories.id').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
