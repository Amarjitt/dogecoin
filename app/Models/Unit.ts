import { DateTime } from 'luxon'
// import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Business from 'App/Models/Business'

import {
  column,
  BaseModel,
  belongsTo,
  BelongsTo,
  hasMany,
  HasMany
} from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
// import Business from 'Database/migrations/1621369692442_add_references_into_businesses'

export default class Unit extends BaseModel {

  @hasMany(() => Product)
  public products: HasMany<typeof Product>


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
