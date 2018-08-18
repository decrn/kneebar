import { Item } from '../../models/item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.less']
})
export class CommentboxComponent implements OnInit {

  @Input('item') item: Item;

  constructor() { }

  ngOnInit() {
  }

}
