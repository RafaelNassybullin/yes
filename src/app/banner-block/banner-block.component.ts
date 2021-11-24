import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner-block',
  templateUrl: './banner-block.component.html',
  styleUrls: ['./banner-block.component.scss']
})
export class BannerBlockComponent implements OnInit {

  constructor() {}

  @Input() io:Array<{img: string, shops: string}> = []

  ngOnInit(): void {}

}
