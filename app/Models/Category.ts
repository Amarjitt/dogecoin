import { DateTime } from 'luxon'
import User from 'App/Models/User'
import Coupon from 'App/Models/Coupon'
import Discount from 'App/Models/Discount'
import Product from 'App/Models/Product'
import Business from 'App/Models/Business'

import { BaseModel, column,belongsTo,BelongsTo,hasMany,HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Category extends BaseModel {
  @hasMany(() => Coupon)
  public coupons: HasMany<typeof Coupon>
  
  @hasMany(() => Discount)
  public discounts: HasMany<typeof Discount>

  @hasMany(() => Product)
  public products: HasMany<typeof Product>

  @belongsTo(() => User)
  public users: BelongsTo<typeof User>

  @belongsTo(() => Business)
  public business: BelongsTo<typeof Business>
  
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
