import { DateTime } from 'luxon'
import { BaseModel, column , hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Business from 'App/Models/Business'

export default class Currency extends BaseModel {
  
  @hasMany(() => Business)
  public business: HasMany<typeof Business>
  
  @column({ isPrimary: true })
  public id: BigInt
  
  @column()
  public country: String

  @column()
  public currency: String

  @column()
  public code: String

  @column()
  public symbol: String

  @column()
  public thousand_separator: String

  @column()
  public decimal_separator: String


  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}
