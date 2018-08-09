import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category';

@Component({
  selector: 'app-positions-overview',
  templateUrl: './positions-overview.component.html',
  styleUrls: ['./positions-overview.component.less']
})
export class PositionsOverviewComponent implements OnInit {

  category: Category;

  constructor(
    public route: ActivatedRoute,
    @Inject('DataService') public ds: DataService
  ) { }

  ngOnInit() {
    this.route.url.subscribe(e => {
      const path = this.route.snapshot.url;
      if (!path.length) { // url /positions
        this.ds.getCategory().subscribe(category => this.category = category);
      } else { // url /positions/guard/.../.../last <- load this last one
        this.ds.getCategory(path[path.length - 1].path).subscribe(category => this.category = category);
      }
    });
  }
}
