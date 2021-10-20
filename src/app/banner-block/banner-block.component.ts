import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner-block',
  templateUrl: './banner-block.component.html',
  styleUrls: ['./banner-block.component.scss']
})
export class BannerBlockComponent implements OnInit {

  constructor() {}

  @Input()
  bannerArr = [
    {
      img: 'assets/images/16c0edbb863dbcd523b96e3eed3507f5.jpg',
      shop: 'SHOP WOMEN'
    },
    {
      img: 'assets/images/cc299efab487b9f61e766de7e8dec9a9.jpg',
      shop: 'SHOP MEN'
    }
  ]

  ngOnInit(): void {}

}
