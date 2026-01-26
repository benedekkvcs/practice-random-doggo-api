import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private apiUrl = 'https://dog.ceo/api';

  constructor(private http: HttpClient) {}

  getDog(): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds/image/random`);
  }
}
