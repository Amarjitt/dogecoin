import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import VariationValueTemplate from './VariationValueTemplate'

export default class VariationTemplate extends BaseModel {
  
  @hasMany(() => VariationValueTemplate)
  public variation_value_template: HasMany<typeof VariationValueTemplate>


  
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
