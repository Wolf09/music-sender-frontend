import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observer } from 'rxjs';
import { URL } from '../global/global';
import { GenreService } from 'src/app/services/genre.service';
import { Genre } from 'src/app/models/Genre';
import { Music } from 'src/app/models/Music';
import { MusicsService } from 'src/app/services/musics.service';



@Component({
  selector: 'app-search-genre',
  templateUrl: './search-genre.component.html',
  styleUrls: ['./search-genre.component.css']
})
export class SearchGenreComponent implements OnInit {

  generos:any;
  musicas:any;
  url=URL;
  constructor(private _genreService:GenreService,private _musicService:MusicsService) { 
    this.getGeneros();
  }
  getGeneros(){
    let observador:Observer<Genre[]>={
      next: (data) => {
        //console.log(data);
        this.generos=data;
        console.log(this.generos);
      },
      error: (error) => {
        console.log(error);
        console.log('se produjo el siguiente error al recuperar un paquete');
      },
      complete: () => {
        console.log('proceso finalizado');
      }
    };
    this._genreService.getGenres()
    .subscribe(observador);
  }

  getGenreMusic($event){
    let observador:Observer<Music[]>={
      next: (data) => {
        //console.log(data);
        this.musicas=data;
        console.log(this.musicas);
        for (let music of this.musicas) {
          let estrellas = music.estrella;
          let rate: Array<boolean> = [];
          for (var _i = 0; _i < estrellas; _i++) {
            rate.push(true)
            console.log(_i);
          }
          music['puntaje'] = rate;
          console.log('cancion', music.puntaje); // 1, "string", false
        }
      },
      error: (error) => {
        console.log(error);
        console.log('se produjo el siguiente error al recuperar un paquete');
      },
      complete: () => {
        console.log('proceso finalizado');
      }
    };
    this._musicService.getMusicGenre($event)
    .subscribe(observador);
  }
  ngOnInit() {
  }

}