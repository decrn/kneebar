import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { DataService } from './data.service';
import { Position } from '../models/position';
import { Submission } from '../models/submission';
import { Category } from '../models/category';
@Injectable({
    providedIn: 'root',
})

export class FakeDataService implements DataService {

    private submissions: Submission[] = [
        new Submission('ezekiel-choke', 'Ezekiel Choke'),
        new Submission('darce-choke', 'D\'arce Choke'),
        new Submission('armbar', 'Armbar'),
    ];

    private positions: Position[] = [
        new Position('butterfly-guard', 'Butterfly Guard', [this.submissions[1]]),
        new Position('spider-guard', 'Spider Guard', [this.submissions[1], this.submissions[2]]),
        new Position('crab-guard', 'Crab Guard', []),
    ];

    private categories: Category[] = [
        new Category('closed-guard', 'Closed Guard', [this.positions[1], this.positions[2]]),
        new Category('open-guard', 'Open Guard', [this.positions[0]]),
        new Category('back-mount', 'Back Mount', []),
    ];

    constructor() { }



    getPositions(): Observable<Position[]> {
        return of(this.positions);
    }
    getCategories(name?: string): Observable<Category[]> {
        return of(this.categories.filter(c => !name || c.name.indexOf(name) > -1));
    }
    getSubmissions(): Observable<Submission[]> {
        return of(this.submissions);
    }

    getPosition(name: string): Observable<Position> {
        return of(
            this.positions.find(p => p.name.indexOf(name) > -1)
        );
    }
    getSubmission(name: string): Observable<Submission> {
        return of(
            this.submissions.find(s => s.name.indexOf(name) > -1)
        );
    }


}
