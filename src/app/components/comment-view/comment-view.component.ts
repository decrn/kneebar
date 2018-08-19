import { Item } from '../../models/item';
import { DataService } from '../../providers/data.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.less']
})
export class CommentViewComponent implements OnInit {

  @Input('item') item: Item;
  comments: Comment[];
  
  constructor(
    @Inject('DataService') public ds: DataService
  ) { }

  ngOnInit() {
    this.ds.getComments(this.item.name).subscribe(comments => this.comments = comments);
  }

}
