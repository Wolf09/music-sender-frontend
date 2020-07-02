import { Component, OnInit } from '@angular/core';
import { MusicsService } from 'src/app/services/musics.service';
import { ActivatedRoute } from '@angular/router';
import { Music } from 'src/app/models/Music';
import { Observer } from 'rxjs';
import { URL } from '../global/global';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent implements OnInit {
  artista:any[]=[];
  index:string;
  url:string=URL;
  private rate: Array<any>;
  constructor(private _musicService:MusicsService,
    private route: ActivatedRoute) { 
    this.route.params.subscribe( params => {
      this.index = params['id'];
      console.log(params['id']);
      this.getCancion(params['id']);
    });
  }

  ngOnInit() {
    this.rate = [true, true, true,true, true];
  }
  getCancion(id: String){
    let observador:Observer<Music[]>={
      next: (data) => {
        console.log(data);
        this.artista=data;
        for (let music of this.artista) {
          let estrellas = music.estrella;
          let rate: Array<boolean> = [];
          for (var _i = 0; _i < estrellas; _i++) {
            rate.push(true)
            console.log(_i);
          }
          music['puntaje'] = rate;
          console.log('cancion', music.puntaje); // 1, "string", false
        }
        console.log(this.artista);
      },
      error: (error) => {
        console.log(error);
        console.log('se produjo el siguiente error al recuperar un paquete');
      },
      complete: () => {
        console.log('proceso finalizado');
      }
    };
    this._musicService.getPopulares()
    .subscribe(observador);
  }
}
