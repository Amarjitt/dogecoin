import Brand from 'App/Models/Brand'
import Business from 'App/Models/Business'
import Category from 'App/Models/Category'
import Coupon from 'App/Models/Coupon'
import Discount from 'App/Models/Discount'
import NotificationTemplate from 'App/Models/NotificationTemplate'
import Product from 'App/Models/Product'
import TaxRate from 'App/Models/TaxRate'
import Unit from 'App/Models/Unit'
import { DateTime } from 'luxon'
import {
  column,
  BaseModel,
  hasMany,
  HasMany
} from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {

  @hasMany(() => Brand)
  public brands: HasMany<typeof Brand>

  @hasMany(() => Business)
  public business: HasMany<typeof Business>

  @hasMany(() => Category)
  public categories: HasMany<typeof Category>

  @hasMany(() => Coupon)
  public coupons: HasMany<typeof Coupon>

  @hasMany(() => Discount)
  public discounts: HasMany<typeof Discount>

  @hasMany(() => NotificationTemplate)
  public notification_templates: HasMany<typeof NotificationTemplate>

  @hasMany(() => Product)
  public products: HasMany<typeof Product>
  
  @hasMany(() => TaxRate)
  public tax_rates: HasMany<typeof TaxRate>

  @hasMany(() => Unit)
  public units: HasMany<typeof Unit>

////////// to be maintained-->////////////////////////////////////////////////
  @column({ isPrimary: true })
  public id: bigint

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public remember_token: string

  @column.dateTime()
  public email_verified_at: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}





