import Application from '@ioc:Adonis/Core/Application'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class IndexSeeder extends BaseSeeder {

  private async runSeeder(seeder: { default: typeof BaseSeeder }) {
    /**
     * Do not run when not in dev mode and seeder is development
     * only
     */
    if (seeder.default.developmentOnly && !Application.inDev) {
      return
    }

    await new seeder.default(this.client).run()
  }

  public async run () {
    // Write your database queries inside the run method
    await this.runSeeder(await import('../Admin'))
    await this.runSeeder(await import('../User'))
    await this.runSeeder(await import('../Currency'))
    await this.runSeeder(await import('../Business'))
    await this.runSeeder(await import('../Banner'))

  }
}
