import { Item } from '../../models/item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.less']
})
export class CommentBoxComponent implements OnInit {

  @Input('item') item: Item;

  constructor() { }

  ngOnInit() {
  }

}
