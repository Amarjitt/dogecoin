import { DateTime } from 'luxon'
import User from 'App/Models/User'
import Category from 'App/Models/Category'
import Product from 'App/Models/Product'
import Brand from 'App/Models/Brand'
import Business from 'App/Models/Business'

import { BaseModel, column,belongsTo,BelongsTo, hasMany , HasMany } from '@ioc:Adonis/Lucid/Orm'
import Discountable from 'App/Models/Discountable'

export default class Discount extends BaseModel {

  @hasMany(() => Discountable)
  public discountables: HasMany<typeof Discountable>
 
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>

  @belongsTo(() => Brand)
  public brand: BelongsTo<typeof Brand>  

  @belongsTo(() => Business)
  public business: BelongsTo<typeof Business> 

  
 
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
