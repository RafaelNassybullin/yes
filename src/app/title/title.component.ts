import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  constructor() { }
  @Input() stockTitl:Array<{mainTitle: string, routeButton: string}> = []
  ngOnInit(): void {}

}
