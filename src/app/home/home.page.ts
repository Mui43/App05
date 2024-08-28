import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private Nav:NavController) {}

  item=[
    {
      id:1,
      name: 'Surface Pro 9',
      price: 45700,
      detail: 'detail a',
      imageURL: 'https://img.th.my-best.com/product_images/c6a0e2f4a9cb17568ae473f34054a5ab.jfif?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=6a8e7004102c881a8264632250a8a36c',
    },

    {
      id:2,
      name: 'Zenbook 14 Flip OLED (UP5401ZA-KN501WS)',
      price: 41990,
      detail: 'detail b',
      imageURL: 'https://yourshoppy.com/wp-content/uploads/2022/06/ZenBook-14-OLED-PINE-GRAY-UP5401-7.png',
    },

    {
      id:3,
      name: 'Yoga Duet7 13ITL6-82Q70002TA',
      price: 49990,
      detail: 'detail c',
      imageURL: 'https://p3-ofp.static.pub//fes/cms/2024/02/08/r1regnzjzgv9csuvnmas1govore689903045.png',
    },

    {
      id:4,
      name: 'Pavilion x360 14-ek0001TU',
      price: 31990,
      detail: 'detail d',
      imageURL: 'https://notebookspec.com/storage/notebook/12462-notebook_12144_Pavilion%20x360%2014%20ek-f.jpg',
    },
  ]

  gotoDetail(i:any){
    this.Nav.navigateForward('/detail',{state:{i}});
  }

}
