import { DateTime } from 'luxon'
import { BaseModel, column , belongsTo ,BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import VariationTemplate from './VariationTemplate'

export default class VariationValueTemplate extends BaseModel {
  
  @belongsTo(() => VariationTemplate)
  public variation_template: BelongsTo<typeof VariationTemplate>
  
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
