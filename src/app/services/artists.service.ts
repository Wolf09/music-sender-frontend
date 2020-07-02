import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../models/Artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  private url: string = 'http://3.94.139.219:3000';
  constructor(private httpClient: HttpClient) { }

  getArtists():Observable<Artist[]>{
    return this.httpClient.get<Artist[]>(this.url);
  }

  getSearch(nombre):Observable<Artist[]>{
    return this.httpClient.get<Artist[]>(`${this.url}/artista/${nombre}`);
  }

}