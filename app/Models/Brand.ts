import { DateTime } from 'luxon'
import User from 'App/Models/User'
import Discount from 'App/Models/Discount'
import Product from 'App/Models/Product'
import Business from 'App/Models/Business'

// import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

import { BaseModel, column,belongsTo,BelongsTo , hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
// import Business from 'Database/migrations/1621369692442_add_references_into_businesses'

export default class Brand extends BaseModel {


  @hasMany(() => Discount)
  public discounts: HasMany<typeof Discount>

  @hasMany(() => Product)
  public products: HasMany<typeof Product>
  
  @belongsTo(() => User)
  public users: BelongsTo<typeof User>

  @belongsTo(() => Business)
  public business: BelongsTo<typeof Business>


  // `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  // `business_id` bigint(20) unsigned NOT NULL,
  // `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  // `thumb` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  // `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  // `banner` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  // `description` text COLLATE utf8mb4_unicode_ci,
  // `created_by` bigint(20) unsigned NOT NULL,
  // `deleted_at` timestamp NULL DEFAULT NULL,
  // `created_at` timestamp NULL DEFAULT NULL,
  // `updated_at` timestamp NULL DEFAULT NULL,






  @column({ isPrimary: true })
  public id: BigInt

  @column()
  public business_id: BigInt

  @column()
  public name: String

  @column()
  public thumb: String

  @column()
  public icon: String

  @column()
  public banner: String

  @column()
  public description: String

  @column()
  public created_by: BigInt


  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}