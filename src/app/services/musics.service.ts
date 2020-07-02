import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from '../models/Music';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {
  private url: string = 'http://3.94.139.219:3000';
  constructor(private httpClient: HttpClient) { }

  getMusics(idAlbum):Observable<Music[]>{
    return this.httpClient.get<Music[]>(`${this.url}/cancion/${idAlbum}`);
  }
  getMusicGenre(idGenero):Observable<Music[]>{
    return this.httpClient.get<Music[]>(`${this.url}/genero/canciones/${idGenero}`);
  }
 getSearch(title):Observable<Music[]>{
    return this.httpClient.get<Music[]>(`${this.url}/cancion/nombreCancion/${title}`);
  }
  getPopulares():Observable<Music[]>{
    return this.httpClient.get<Music[]>(`${this.url}/cancion/categoria/popular`);
  }
  getLanzamientos():Observable<Music[]>{
    return this.httpClient.get<Music[]>(`${this.url}/cancion/categoria/lanzamiento`);
  }

}