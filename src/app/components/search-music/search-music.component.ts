import { Component, OnInit } from '@angular/core';
import { MusicsService } from 'src/app/services/musics.service';
import { Observer } from 'rxjs';
import { Music } from 'src/app/models/Music';
import { URL } from '../global/global';

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.css']
})
export class SearchMusicComponent implements OnInit {
  musics:any;
  url:any=URL;
  loading:boolean;
  constructor(private _musicService:MusicsService) { 
    this.loading=true;
  }

  ngOnInit() {
  }
  buscarTitulo($event){
    console.log($event);
    if ($event != ''){
      let observador:Observer<Music[]>={
        next: (data) => {
          //console.log(data);
          this.musics=data;
          this.loading=false;
          console.log(this.musics);
        },
        error: (error) => {
          console.log(error);
          console.log('se produjo el siguiente error al recuperar un paquete');
        },
        complete: () => {
          console.log('proceso finalizado');
        }
      };
      this._musicService.getSearch($event)
      .subscribe(observador);
    }else{
      this.loading=true;
      this.musics=[];
    }
  }

}
