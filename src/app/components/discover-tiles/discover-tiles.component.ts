import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item';
import { Category } from '../../models/category';

@Component({
  selector: 'app-discover-tiles',
  templateUrl: './discover-tiles.component.html',
  styleUrls: ['./discover-tiles.component.less']
})
export class DiscoverTilesComponent implements OnInit {

  @Input('items') items: any;

  constructor() { }

  ngOnInit() {
  }

  isCategory(items: any) {
    return items instanceof Category;
  }

}
