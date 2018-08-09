import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { DataService } from './data.service';
import { Position } from '../models/position';
import { Submission } from '../models/submission';
import { Category } from '../models/category';
import { Item } from '../models/item';
@Injectable({
    providedIn: 'root',
})

export class FakeDataService implements DataService {

    private submissions: Submission[] = [
        new Submission('ezekiel-choke', 'Ezekiel Choke'),
        new Submission('armbar', 'Armbar'),
        new Submission('darce-choke', 'D\'arce Choke'),
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

    getItem(name: string): Observable<Item> {
        const items = [];
        this.positions.forEach(p => items.push(p));
        this.submissions.forEach(s => items.push(s));
        return of(
            items.find(p => p.name.indexOf(name) > -1)
        );
    }


}
