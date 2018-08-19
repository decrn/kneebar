import { Item } from '../../models/item';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';


@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.less']
})
export class CommentViewComponent implements OnInit {

  sorting: string;
  @Input('comments') comments: Comment[];

  constructor() {
    this.sorting = '-date'; // sort by newest first on init
   }

  ngOnInit() {
  }

}
