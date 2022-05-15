import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime



  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

      @column()
      public first_name: String

      @column()
      public last_name: String

      @column()
      public address: String

      @column()
      public phone_number: String

      @column()
      public enrolment_number: String

      @column()
      public email: String  
  // static first_name: String
}
