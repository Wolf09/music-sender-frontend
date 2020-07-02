import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/Artist';
import { Observer } from 'rxjs';
import { ArtistsService } from 'src/app/services/artists.service';
import { URL } from '../global/global';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  public musics: any;
  url=URL;
  loading:boolean;
  constructor(private _musicService:ArtistsService) { 
    this.loading=true;
    this.getArtistas();
  }

  ngOnInit() {
    
  }
  getArtistas(){
    let observador:Observer<Artist[]>={
      next: (data) => {
        //console.log(data);
        this.musics=data;
        //console.log(this.musics);
        this.loading=false;
      },
      error: (error) => {
        console.log(error);
        console.log('se produjo el siguiente error al recuperar un paquete');
      },
      complete: () => {
        console.log('proceso finalizado');
      }
    };
    this._musicService.getArtists()
    .subscribe(observador);
  }
  buscarArtista($event){
    console.log($event);
    if ($event != ''){
      let observador:Observer<Artist[]>={
        next: (data) => {
          //console.log(data);
          this.musics=data;
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
      this.getArtistas();
    }
  }
}
