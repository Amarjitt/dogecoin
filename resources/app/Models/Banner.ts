import { DateTime } from 'luxon'
import { BaseModel, column , belongsTo ,BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Product from 'App/Models/Product'
import Business from 'App/Models/Business'
// import Business from 'Database/migrations/1621369692442_add_references_into_businesses'


export default class Banner extends BaseModel {

  @belongsTo(() => Product)
  public products: BelongsTo<typeof Product>

  @belongsTo(() => Business)
  public business: BelongsTo<typeof Business>

  @column({ isPrimary: true  })
  public id: BigInt

  @column()
  public business_id: BigInt

  @column()
  public title: string

  @column()
  public caption: string

  @column()
  public url: string

  @column()
  public page: string

  @column()
  public status: boolean

  @column()
  public type: string

  @column()
  public thumb: string

  @column()
  public icon: string

  @column()
  public banner: string

  @column()
  public created_by: BigInt


  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}
