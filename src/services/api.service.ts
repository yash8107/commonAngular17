import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // connection b/w Angular 17 with Node js with express
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }
  getData(): Observable<string> {
    return this.http.get(this.baseUrl, { responseType: 'text' });
  }
}
