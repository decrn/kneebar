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
        new Submission('rear-naked-choke', 'Rear Naked Choke'),
    ];

    private positions: Position[] = [
        new Position('butterfly-guard', 'Butterfly Guard', [this.submissions[1]]),
        new Position('spider-guard', 'Spider Guard', [this.submissions[1], this.submissions[2]]),
        new Position('crab-guard', 'Crab Guard', []),
        new Position('back-mount', 'Back Mount', [this.submissions[3]]),
    ];

    private subcategories: Category[] = [
        new Category('closed-guard', 'Closed Guard', [this.positions[1], this.positions[2]]),
        new Category('open-guard', 'Open Guard', [this.positions[0]]),
    ];

    private categories: Category[] = [
        new Category('guard', 'Guard', [], [this.subcategories[0], this.subcategories[1]]),
        new Category('mount', 'Mount', [this.positions[3]], []),
        new Category('standing', 'Standing', [this.positions[2]], [this.subcategories[1]]),
    ];


    private rootCategory: Category = new Category('', 'Positions', [], this.categories);

    private allCategories = this.categories.concat(this.subcategories);

    constructor() { }



    getPositions(): Observable<Position[]> {
        return of(this.positions);
    }
    getCategory(name?: string): Observable<Category> {
        return of(!name ? this.rootCategory : this.allCategories.find(c => c.name === name));
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
