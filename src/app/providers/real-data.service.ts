import { HttpClient, HttpHeaders } from '@angular/common/http';
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
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class RealDataService implements DataService {

    @LocalStorage() private jwttoken: string;
    private user: User;
    private url = environment.apiUrl;
    public loading = false;

    constructor(
        public router: Router,
        private http: HttpClient,
    ) { }

    getPositions(): Observable<Position[]> {
        this.loading = true;
        return this.http.get(this.url + 'positions').pipe(map((json: any) => {
            this.loading = false;
            return json.map(p => Position.fromObject(p));
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
            return new Category(
                p.name, p.title, p.thumbnail,
                p.items.map(c => Position.fromObject(c)),
                p.subcategories.map(c => new Category(c.name, c.title, c.thumbnail))
            );
        }));
    }
    getSubmissions(): Observable<Submission[]> {
        this.loading = true;
        return this.http.get(this.url + 'submissions').pipe(map((json: any) => {
            this.loading = false;
            return json.map(p => Submission.fromObject(p));
        }));
    }
    getItem(name: string): Observable<Item> {
        this.loading = true;
        return this.http.get(this.url + 'item/' + name).pipe(map((p: any) => {
            this.loading = false;
            if (p.type === 'position') {
                return Position.fromObject(p);
            } else {
                return Submission.fromObject(p);
            }
        }));
    }

    getCommentsByItem(name: string): Observable<Comment[]> {
        this.loading = true;
        return this.http.get(this.url + 'comments/' + name).pipe(map((json: any) => {
            this.loading = false;
            return json.map(p => new Comment(p.author, p.comment, p.date));
        }));
    }

    getCommentsByUser(): Observable<Comment[]> {
        this.loading = true;
        return this.http.get(this.url + 'comments', {
            headers: new HttpHeaders({Authorization: 'Bearer ' + this.jwttoken })
          }).pipe(map((json: any) => {
            this.loading = false;
            return json.map(p => new Comment(p.author, p.comment, p.date));
        }));
    }

    getLoggedInUser(): Observable<User> {
        this.loading = true;
        if (this.user) {
            return of(this.user);
        }
        return this.http.get(this.url + 'users/account', {
            headers: new HttpHeaders({Authorization: 'Bearer ' + this.jwttoken })
          }).pipe(map((json: any) => {
            this.loading = false;
            this.user = new User(json._id, json.username, json.email);
            return this.user;
        }));
    }

    isLoggedIn(): boolean {
        return this.jwttoken ? true : false;
    }

    logout() {
        this.user = null;
        this.jwttoken = '';
        this.router.navigate(['/']);
    }

    sendComment(comment: string, itemid: string): Observable<Status> {
        return this.http.post(this.url + 'comment', {
            item: itemid,
            comment: comment,
            author: this.user.id
        }, {
            headers: new HttpHeaders({Authorization: 'Bearer ' + this.jwttoken })
        }).pipe(map((json: any) => {
            return new Status(true, '', new Comment(this.user, json.comment, json.date));
        }));
    }

    sendLogin(username: string, password: string): Observable<Status> {
        return this.http.post(this.url + 'users/login', {
            username: username,
            password: password
        }).pipe(map((json: any) => {
            if (json.token) {
                this.jwttoken = json.token;
                return new Status(true);
            }
            return new Status(false, 'Invalid credentials');
        }));
    }

    sendRegister(username: string, email: string, password: string): Observable<Status> {
        return this.http.post(this.url + 'users/register', {
            username: username,
            email: email,
            password: password
        }).pipe(map((json: any) => {
            if (json.token) {
                this.jwttoken = json.token;
                return new Status(true);
            }
            return new Status(false, 'Email or username is already in use');
        }));
    }
}
