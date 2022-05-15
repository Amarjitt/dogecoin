import { DateTime } from 'luxon'
import Product from 'App/Models/Product'
import ProductVariation from 'App/Models/ProductVariation'
import { BaseModel, column ,belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class Variation extends BaseModel {
  
  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>


  @belongsTo(() => ProductVariation)
  public product_variation: BelongsTo<typeof ProductVariation>

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
