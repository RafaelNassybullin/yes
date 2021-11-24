import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
@Input()
  bannerArr = [
    {
      img: 'assets/images/16c0edbb863dbcd523b96e3eed3507f5.jpg',
      shops: 'SHOP WOMEN'
    },
    {
      img: 'assets/images/cc299efab487b9f61e766de7e8dec9a9.jpg',
      shops: 'SHOP MEN'
    }
  ]
  bannerArrTwo = [
    {
      img: 'assets/images/745143d1258eb9cfa7b429326d675717.jpg',
      shops: 'FOR SIGHT'
    },
    {
      img: 'assets/images/a33898d4f2241e3c5881c280bba08ce2.jpg',
      shops: 'FOR LIGHT'
    }
  ]
  titlesStock = [
    {
      mainTitle: 'New in stock',
      routeButton: 'SEE THE COLLECTION'
    }
  ]
  cardStock = [
    {cardImg:'assets/images/16cd49adf5924b2eecbf1762f6d222ae.jpg', name:'Noemi', color:'2 colors', price:95},
    {cardImg:'assets/images/a4d12c8a1f03e6365c7ea8917584108f.jpg', name:'Hurst', color:'2 colors', price:285},
    {cardImg:'assets/images/e2263743afad5e838fd8bd3a77ac83fd.jpg', name:'Louisa Nylon', color:'2 colors', price:315}
  ]
  titlesBestsellers = [
    {
      mainTitle: 'Bestsellers',
      routeButton: 'SEE THE COLLECTION'
    }
  ]
  cardBestsellers = [
    {cardImg:'assets/images/9d4dab940fdcb00c300400cf7aa5b526.jpg', name:'Saskia', color:'', price:115},
    {cardImg:'assets/images/862ec0c5cd74a3fed53b43efda225958.jpg', name:'Cynthia', color:'2 colors', price:95},
    {cardImg:'assets/images/b61c917495849afad532e267d3c4e24f.jpg', name:'Eimear', color:'2 colors', price:105}
  ]
  titlesBrands = [
    {
      mainTitle: 'Our brands',
      routeButton: 'SEE MORE'
    }
  ]
}
