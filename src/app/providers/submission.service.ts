import { Injectable } from '@angular/core';
import { Submission } from '../models/submission';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  private _submissions = [
    { id: 1, name: 'Rear naked choke' },
    { id: 2, name: 'Guillotine choke' }
  ];

  constructor() { }

  get submissions(): Observable<Submission[]> {
    return of(this._submissions);
  }

  addSubmission(submission: Submission) {
    this._submissions.push(submission);
  }

}
