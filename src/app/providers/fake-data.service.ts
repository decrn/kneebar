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
        new Submission('ezekiel-choke', 'Ezekiel Choke', 'armbar'),
        new Submission('armbar', 'Armbar', 'armbar'),
        new Submission('darce-choke', 'D\'arce Choke', 'armbar'),
        new Submission('rear-naked-choke', 'Rear Naked Choke', 'armbar'),
    ];

    private positions: Position[] = [
        new Position('butterfly-guard', 'Butterfly Guard', 'butterfly-guard', [this.submissions[1]]),
        new Position('spider-guard', 'Spider Guard', 'spider-guard', [this.submissions[1], this.submissions[2]]),
        new Position('de-la-riva-guard', 'De La Riva Guard', 'dlr-guard', []),
        new Position('back-mount', 'Back Mount', 'back-mount', [this.submissions[3]]),
    ];

    private subcategories: Category[] = [
        new Category('closed-guard', 'Closed Guard', 'closed-guard', [this.positions[1], this.positions[2]]),
        new Category('open-guard', 'Open Guard', 'open-guard', [this.positions[0]]),
    ];

    private categories: Category[] = [
        new Category('guard', 'Guard', 'guard', [], [this.subcategories[0], this.subcategories[1]]),
        new Category('mount', 'Mount', 'mount', [this.positions[3]], []),
        new Category('standing', 'Standing', 'standing', [this.positions[2]], [this.subcategories[1]]),
    ];


    private rootCategory: Category = new Category('', 'Positions', '', [], this.categories);

    private allCategories = this.categories.concat(this.subcategories);

    constructor() {
        this.submissions.forEach(s => s.description = 'Lorem Ipsum dolor sid amed. Escquiscet sum loano');
        this.positions.forEach(p => p.description = 'Lorem Ipsum dolor sid amed. Escquiscet sum loano');
    }



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
