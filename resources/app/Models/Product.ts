import { DateTime } from 'luxon'
import { BaseModel, column ,belongsTo,BelongsTo , hasMany,HasMany} from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Category from 'App/Models/Category'
import Discount from 'App/Models/Discount'
import ProductVariation from 'App/Models/ProductVariation'
import Variation from 'App/Models/Variation'
import Brand from 'App/Models/Brand'
import Business from 'App/Models/Business'
import TaxRate from './TaxRate'
import Unit from './Unit'

export default class Product extends BaseModel {
  @hasMany(() => Discount)
  public discounts: HasMany<typeof Discount>
  
  @hasMany(() => ProductVariation)
  public product_variations: HasMany<typeof ProductVariation>

  @hasMany(() => Variation)
  public variations: HasMany<typeof Variation>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Category)
  public Category: BelongsTo<typeof Category>

  @belongsTo(() => Brand)
  public brand: BelongsTo<typeof Brand>
  
  @belongsTo(() => Business)
  public business: BelongsTo<typeof Business>

  @belongsTo(() => TaxRate)
  public tax_rate: BelongsTo<typeof TaxRate>

  @belongsTo(() => Unit)
  public unit: BelongsTo<typeof Unit>
  
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
