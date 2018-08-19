import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { Submission } from '../../models/submission';
import { AbstractControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-submissions-overview',
  templateUrl: './submissions-overview.component.html',
  styleUrls: ['./submissions-overview.component.less']
})
export class SubmissionsOverviewComponent implements OnInit {

  submissions: Submission[] = [];
  query: string;

  constructor(
    @Inject('DataService') public ds: DataService
  ) { }

  ngOnInit() {
    this.ds.getSubmissions().subscribe(submissions => submissions.forEach(s => this.submissions.push(s)));
  }

}
