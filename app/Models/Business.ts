import { DateTime  } from 'luxon'
import User from 'App/Models/User'
import Banner from 'App/Models/Banner'
import Brand from 'App/Models/Brand'
import Unit from 'App/Models/Unit'
import Discount from 'App/Models/Discount'
import Coupon from 'App/Models/Coupon'
import Product from 'App/Models/Product'
import TaxRate from 'App/Models/TaxRate'
import NotificationTemplate from 'App/Models/NotificationTemplate'
import Category from 'App/Models/Category'
import { AccountingMethod , SellPriceTax } from 'Contracts/enums'



import { BaseModel, column,belongsTo,BelongsTo ,hasMany , HasMany } from '@ioc:Adonis/Lucid/Orm'
import Currency from 'App/Models/Currency'




export default class Business extends BaseModel {

  public static table = 'business'

  @hasMany(() => Banner)
  public banners: HasMany<typeof Banner>

  @hasMany(() => Brand)
  public brands: HasMany<typeof Brand>

  @hasMany(() => Unit)
  public units: HasMany<typeof Unit>

  @hasMany(() => TaxRate)
  public tax_rates: HasMany<typeof TaxRate>

  @hasMany(() => NotificationTemplate)
  public notification_templates: HasMany<typeof NotificationTemplate>

  @hasMany(() => Discount)
  public discounts: HasMany<typeof Discount>

  @hasMany(() => Category)
  public categories: HasMany<typeof Category>

  @hasMany(() => Coupon)
  public coupons: HasMany<typeof Coupon>

  @belongsTo(() => Currency)
  public currency: BelongsTo<typeof Currency>

  @hasMany(() => Product)
  public products: HasMany<typeof Product>
  
  
  
  @belongsTo(() => User)
  public users: BelongsTo<typeof User>
  

  
  @column({ isPrimary: true })
  public id: BigInt

  @column()
  public owner_id: BigInt

  // currency_id
  @column()
  public currency_id: BigInt

  @column()
  public name: String

  @column.date()
  public start_date: DateTime

  @column()
  public tax_number_1: String

  @column()
  public tax_label_1: String

  @column()
  public tax_number_2: String

  @column()
  public tax_label_2: String

  @column()
  public time_zone: String

  @column()
  public logo: String

  @column()
  public sku_prefix: String

  @column()
  public enable_tooltip: Boolean

  @column()
  public fy_start_month: Boolean

  @column()
  public default_sales_discount: Number

  @column()
  public default_profit_percent: Number

  @column()
  public accounting_method: AccountingMethod

  @column()
  public sell_price_tax: SellPriceTax


  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}
