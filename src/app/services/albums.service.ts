import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private url: string = 'http://3.94.139.219:3000';
  constructor(private httpClient: HttpClient) { }

  getAlbums(id):Observable<Album[]>{
    return this.httpClient.get<Album[]>(`${this.url}/album/${id}`);
  }
  getSearch(genero):Observable<Album[]>{
    return this.httpClient.get<Album[]>(`${this.url}/genero/${genero}`);
  }

}