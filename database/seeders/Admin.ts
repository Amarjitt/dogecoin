import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
// import Admins from 'Database/migrations/1621246199464_admins'
import Admin from 'App/Models/Admin'

export default class AdminSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    // await Admin.createMany([
    //   {
    //     email: 'virk@adonisjs.com',
    //     password: 'secret',
    //     name: 'vikrram virk',
    //     remember_token: 'sldnsnfjsdhfsdjln'
    //   },
    //   {
    //     email: 'romain@adonisjs.com',
    //     password: 'supersecret',
    //     name: 'vikrram virk',
    //     remember_token: 'sldnsnfon3n23n'
    //   }
    // ])
  }
}
