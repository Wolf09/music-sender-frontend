import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../models/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private url: string = 'http://3.94.139.219:3000';
  constructor(private httpClient: HttpClient) { }

  getGenres():Observable<Genre[]>{
    return this.httpClient.get<Genre[]>(`${this.url}/genero`);
  }

}