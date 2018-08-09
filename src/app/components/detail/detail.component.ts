import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models/item';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  public item: Item;
  constructor(public route: ActivatedRoute, @Inject('DataService') public ds: DataService) { }

  ngOnInit() {
    this.ds.getItem(this.route.snapshot.paramMap.get('name')).subscribe(item => this.item = item);
  }

}
