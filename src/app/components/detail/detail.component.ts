import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models/item';
import { DataService } from '../../providers/data.service';
import { Position } from '../../models/position';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  public item: Item;
  comments: Comment[];
  window = window; // make window global variable accessible from template

  constructor(
    public route: ActivatedRoute,
    @Inject('DataService') public ds: DataService
  ) { }

  ngOnInit() {
    this.ds.getItem(this.route.snapshot.paramMap.get('name')).subscribe(item => this.item = item);
    this.ds.getCommentsByItem(this.item.name).subscribe(comments => this.comments = comments);
  }

  isPosition(item: Item) {
    return item instanceof Position;
  }

}
