import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { Position } from '../../models/position';

@Component({
  selector: 'app-positions-overview',
  templateUrl: './positions-overview.component.html',
  styleUrls: ['./positions-overview.component.less']
})
export class PositionsOverviewComponent implements OnInit {

  positions: Position[] = [];

  constructor(
    @Inject('DataService') public ds: DataService
  ) { }

  ngOnInit() {
    this.ds.getPositions().subscribe(positions => this.positions = positions);
  }

}
