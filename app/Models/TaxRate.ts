import { DateTime } from 'luxon'
import User from 'App/Models/User'
import Business from 'App/Models/Business'
import { BaseModel, column,belongsTo,BelongsTo ,hasMany , HasMany} from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class TaxRate extends BaseModel {

  @hasMany(() => Product)
  public products: HasMany<typeof Product>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
  
  @belongsTo(() => Business)
  public business: BelongsTo<typeof Business>

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
