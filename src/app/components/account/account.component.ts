import { User } from '../../models/user';
import { DataService } from '../../providers/data.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  comments: Comment[];
  user: User;

  constructor(
    @Inject('DataService') public ds: DataService
  ) { }

  ngOnInit() {
    this.ds.getCommentsByUser().subscribe(comments => this.comments = comments);
    this.ds.getLoggedInUser().subscribe(u => this.user = u);
  }

}
