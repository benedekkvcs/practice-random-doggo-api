import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DogResponse {
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private apiUrl = 'https://dog.ceo/api';

  private http = inject(HttpClient);

  getDog(): Observable<DogResponse> {
    return this.http.get<DogResponse>(`${this.apiUrl}/breeds/image/random`);
  }
}
