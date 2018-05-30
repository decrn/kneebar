import { Component, OnInit } from '@angular/core';
import { Submission } from '../../app-common/types/submission';
import { SubmissionService } from '../../app-common/services/submission.service';

@Component({
  selector: 'app-submission-overview',
  templateUrl: './submission-overview.component.html',
  styleUrls: ['./submission-overview.component.css']
})
export class SubmissionOverviewComponent implements OnInit {

  public submissions: Submission[];

  constructor(private _submissionsService: SubmissionService) {

  }

  ngOnInit() {
    this._submissionsService.submissions.subscribe(res => this.submissions = res);
  }

  add() {
    const newSubmission = { id: 3, name: 'Baseball choke' };
    this._submissionsService.addSubmission(newSubmission);
  }

}
