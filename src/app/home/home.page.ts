import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

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
      imageURL: 'https://img.th.my-best.com/product_images/0c5134c44ecace3adfb7d33ca3526fc1.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=5caa13b61116f985339be7a7e9801c54',
    },

    {
      id:3,
      name: 'Yoga Duet7 13ITL6-82Q70002TA',
      price: 49990,
      detail: 'detail c',
      imageURL: 'https://img.th.my-best.com/product_images/875505e30819d60c524df5296ae8e7ca.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=366b56db6b641ec25129d221bf158ba4',
    },

    {
      id:4,
      name: 'Pavilion x360 14-ek0001TU',
      price: 31990,
      detail: 'detail d',
      imageURL: 'https://img.th.my-best.com/product_images/453478dadba118a8e32cf9e8a9614ca3.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=afe9b375b549d875310767ead1c00459',
    },
  ]

}
