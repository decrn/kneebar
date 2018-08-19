import { HttpClient } from '@angular/common/http';
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
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class RealDataService implements DataService {

    @LocalStorage() private jwttoken: string;
    private user: User;
    private url = 'http://localhost:3000/api/';
    public loading = false;

    constructor(
        public router: Router,
        private http: HttpClient,
    ) { }

    getPositions(): Observable<Position[]> {
        this.loading = true;
        return this.http.get(this.url + 'positions').pipe(map((json: any) => {
            this.loading = false;
            return json.map(p => new Position(p.name, p.title, p.thumbnail, p.submission));
        }));
    }
    getCategory(name?: string): Observable<Category> {
        let tempname = '';
        if (name) {
            tempname = name;
        }
        this.loading = true;
        return this.http.get(this.url + 'category/' + tempname).pipe(map((p: any) => {
            this.loading = false;
            return new Category(p.name, p.title, p.thumbnail);
        }));
    }
    getSubmissions(): Observable<Submission[]> {
        this.loading = true;
        return this.http.get(this.url + 'submissions').pipe(map((json: any) => {
            this.loading = false;
            return json.map(p => new Submission(p.name, p.title, p.thumbnail));
        }));
    }
    getItem(name: string): Observable<Item> {
        this.loading = true;
        return this.http.get(this.url + 'submissions').pipe(map((p: any) => {
            this.loading = false;
            if (p.type === 'position') {
                return new Position(p.name, p.title, p.thumbnail, p.submission);
            } else {
                return new Submission(p.name, p.title, p.thumbnail);
            }
        }));
    }
    getCommentsByItem(name: string): Observable<Comment[]> {
        this.loading = true;
        return this.http.get(this.url + 'comments/' + name).map((response) => {
            this.loading = false;
            const json = response.json();
            return json.map(p => new Comment(p.author, p.comment, p.date));
        }).catch((error: any) => {
            this.loading = false;
            return Observable.throw(error.json().error || 'Server error');
        });
    }
    getCommentsByUser(): Observable<Comment[]> {
        this.loading = true;
        return this.http.get(this.url + 'comments').map((response) => {
            this.loading = false;
            const json = response.json();
            return json.map(p => new Comment(p.author, p.comment, p.date));
        }).catch((error: any) => {
            this.loading = false;
            return Observable.throw(error.json().error || 'Server error');
        });
    }

    getLoggedInUser(): Observable<User> {
        this.loading = true;
        return this.http.get(this.url + 'users/account').map((response) => {
            this.loading = false;
            const json = response.json();
            return new User(json._id, json.username, json.email);
        }).catch((error: any) => {
            this.loading = false;
            return Observable.throw(error.json().error || 'Server error');
        });
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
        return this.http.post(this.url + 'comment', {
            comment: message
        }).map(res => res.json()).map(res => {
            
            return new Comment(this.user, res.comment, res.date);
        }).catch((err: Response) => Observable.throw(err.json()) );
    }

    sendLogin(username: string, password: string): Observable<Status> {
        return this.http.post(this.url + 'users/login', {
            username: username,
            password: password
        }).map(res => res.json()).map(res => {
        if (res.token) {
            this.jwttoken = res.token;
            return true;
        }
        return false;
        }).catch((err: Response) => Observable.throw(err.json()) );
    }

    sendRegister(username: string, email: string, password: string): Observable<Status> {
        return this.http.post(this.url + 'users/register', {
            username: username,
            email: email,
            password: password
        }).map(res => res.json()).map(res => {
        if (res.token) {
            this.jwttoken = res.token;
            return true;
        }
        return false;
        }).catch((err: Response) => Observable.throw(err.json()) );
    }
}
