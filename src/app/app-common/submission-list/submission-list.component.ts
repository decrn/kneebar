import { Component, OnInit, Input } from '@angular/core';
import { Submission } from '../types/submission';

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {

  @Input() submissions: Submission[];

  constructor() { }

  ngOnInit() {
  }

}
