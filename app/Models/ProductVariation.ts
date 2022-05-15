import { DateTime } from 'luxon'
import Product from 'App/Models/Product'
import { BaseModel, column ,belongsTo, BelongsTo , hasMany , HasMany } from '@ioc:Adonis/Lucid/Orm'
import Variation from 'App/Models/Variation'
export default class ProductVariation extends BaseModel {
  
  @hasMany(() => Variation)
  public variations: HasMany<typeof Variation>

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>


  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
