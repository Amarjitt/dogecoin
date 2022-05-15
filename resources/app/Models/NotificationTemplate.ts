import { DateTime } from 'luxon'
import User from 'App/Models/User'
import Business from 'App/Models/Business'


import { BaseModel, column,belongsTo,BelongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class NotificationTemplate extends BaseModel {
  @belongsTo(() => User)
  public users: BelongsTo<typeof User>
  
  @belongsTo(() => Business)
  public business: BelongsTo<typeof Business>
  
  
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
