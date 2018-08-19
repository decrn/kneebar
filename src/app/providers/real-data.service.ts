import { Router } from '@angular/router';
import { Status } from '../models/status';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from './data.service';
import { Position } from '../models/position';
import { Submission } from '../models/submission';
import { Category } from '../models/category';
import { Item } from '../models/item';
import { Comment } from '../models/comment';
import { LocalStorage } from 'ngx-store';

@Injectable({
    providedIn: 'root'
})
export class RealDataService implements DataService {

    @LocalStorage() private jwttoken: string;
    private user: User;

    constructor(
        public router: Router
    ) { }

    getPositions(): Observable<Position[]> {
        throw new Error('Method not implemented.');
    }
    getCategory(name?: string): Observable<Category> {
        throw new Error('Method not implemented.');
    }
    getSubmissions(): Observable<Submission[]> {
        throw new Error('Method not implemented.');
    }
    getItem(name: string): Observable<Item> {
        throw new Error('Method not implemented.');
    }
    getCommentsByItem(name: string): Observable<Comment[]> {
        throw new Error('Method not implemented.');
    }
    getCommentsByUser(): Observable<Comment[]> {
        throw new Error('Method not implemented.');
    }

    getLoggedInUser(): Observable<User> {
        throw new Error('Not implemented yet.');
    }

    isLoggedIn(): boolean {
        return this.jwttoken ? true : false;
    }

    logout() {
        this.user = null;
        this.jwttoken = '';
        this.router.navigate(['/']);
    }

    sendComment(message: string): Observable<Status> {
        throw new Error('Not implemented yet.');
    }

    sendLogin(username: string, password: string): Observable<Status> {
        throw new Error('Not implemented yet.');
    }

    sendRegister(username: string, password: string): Observable<Status> {
        throw new Error('Not implemented yet.');
    }
}
