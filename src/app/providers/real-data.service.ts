import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealDataService implements DataService {

  getPositions(): Observable<Position[]> {
    throw new Error("Method not implemented.");
  }
  getCategory(name?: string): Observable<Category> {
    throw new Error("Method not implemented.");
  }
  getSubmissions(): Observable<Submission[]> {
    throw new Error("Method not implemented.");
  }
  getItem(name: string): Observable<Item> {
    throw new Error("Method not implemented.");
  }
  getComments(name: string): Observable<Comment[]> {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
