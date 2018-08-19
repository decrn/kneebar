import { Status } from '../models/status';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Submission } from '../models/submission';
import { Position } from '../models/position';
import { Category } from '../models/category';
import { Item } from '../models/item';
import { Comment } from '../models/comment';

export interface DataService {
    getPositions(): Observable<Position[]>;
    getCategory(name?: string): Observable<Category>;
    getSubmissions(): Observable<Submission[]>;
    getItem(name: string): Observable<Item>;
    getCommentsByItem(name: string): Observable<Comment[]>;
    getCommentsByUser(): Observable<Comment[]>;
    getLoggedInUser(): Observable<User>;
    isLoggedIn(): boolean;
    logout();

    sendComment(message: string, itemid: string): Observable<Status>;
    sendLogin(username: string, password: string): Observable<Status>;
    sendRegister(username: string, email: string, password: string): Observable<Status>;
}
