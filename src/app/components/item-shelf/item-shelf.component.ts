import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item-shelf',
  templateUrl: './item-shelf.component.html',
  styleUrls: ['./item-shelf.component.less']
})
export class ItemShelfComponent implements OnInit {

  @Input('items') items: Item[];

  constructor() { }

  ngOnInit() {
  }

}
