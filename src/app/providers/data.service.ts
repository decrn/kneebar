import { Observable } from 'rxjs';
import { Submission } from '../models/submission';
import { Position } from '../models/position';
import { Category } from '../models/category';

export interface DataService {
    getPositions(): Observable<Position[]>;
    getCategories(name?: string): Observable<Category[]>;
    getSubmissions(): Observable<Submission[]>;

    getPosition(name: string): Observable<Position>;
    getSubmission(name: string): Observable<Submission>;

}
