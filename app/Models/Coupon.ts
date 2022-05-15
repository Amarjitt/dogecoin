import { DateTime } from 'luxon'
import User from 'App/Models/User'
import Category from 'App/Models/Category'
import Business from 'App/Models/Business'

import { BaseModel, column,belongsTo,BelongsTo ,hasMany , HasMany} from '@ioc:Adonis/Lucid/Orm'

export default class Coupon extends BaseModel {
  
 
  
  
  @belongsTo(() => User)
  public users: BelongsTo<typeof User>
  
  @belongsTo(() => Category)
  public Categories: BelongsTo<typeof Category>

  @belongsTo(() => Business)
  public business: BelongsTo<typeof Business>
  
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
