import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Admin extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public name: string
  @column()
  public email: string
  @column()
  public email_verified_at: DateTime
  @column()
  public password: string
  @column()
  public remember_token: string
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}


// table.bigIncrements('id').unsigned().notNullable().primary()
//       table.string('name').notNullable()
//       table.string('email').notNullable().unique()
//       table.timestamp('email_verified_at').nullable().defaultTo(null)
//       table.string('password').notNullable()
//       table.string('remember_token',100).defaultTo(null)