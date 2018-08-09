import { Observable } from 'rxjs';
import { Submission } from '../models/submission';
import { Position } from '../models/position';
import { Category } from '../models/category';
import { Item } from '../models/item';

export interface DataService {
    getPositions(): Observable<Position[]>;
    getCategories(name?: string): Observable<Category[]>;
    getSubmissions(): Observable<Submission[]>;

    getItem(name: string): Observable<Item>;

}
