import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Banner from 'App/Models/Banner'

export default class BannerSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    
  //   INSERT INTO `banners` (`id`, `business_id`, `title`, `caption`, `url`, `page`, `status`, `type`, `thumb`, `icon`, `banner`, `created_by`, `created_at`, `updated_at`) VALUES
	// (1, 1, 'hdjjdj', 'hjhj', 'h', 'hjhj', 1, '1', NULL, NULL, NULL, 1, '2021-04-30 17:12:21', '2021-04-30 17:12:21');

  // const uniqueKey = 'id'
    await Banner.updateOrCreateMany('id',[{
      id: 1,
      business_id: 1,
      title: 'hjhj',
      caption: 'dsknfkl', 
      url: 'dsf',
      page: 'dsff',
      status: true,
      type: 'dslfnl',
      thumb: 'skdbfd',
      icon: 'null',
      banner: 'null'
      created_by: 1
    }])

  }
}
