import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  item:any;
  constructor(private r:Router) {
    const navigation = this.r.getCurrentNavigation();
    this.item = navigation?.extras?.state?.['i'];
  }

  ngOnInit() {
  }

}
