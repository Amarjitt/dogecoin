import { DateTime } from 'luxon'
import Discount from 'App/Models/Discount'
import { BaseModel, column , belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm'

export default class Discountable extends BaseModel {
  
  // @belongsTo(() => Discount)
  // public discount: BelongsTo<typeof Discount>
  

  @belongsTo(() => Discount)
  public discount: BelongsTo<typeof Discount>

  
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
