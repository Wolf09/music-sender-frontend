import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import { Album } from 'src/app/models/Album';
import { Observer } from 'rxjs';
import { URL } from '../global/global';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  public index:number;
  public albums: any;
  url=URL;
  constructor(private route:ActivatedRoute,
    private _albumService:AlbumsService, private router:Router) {
    this.route.params.subscribe( params => {
      this.index = params['id'];
      console.log(params['id']);
      this.getAlbunes(params['id']);
    });
  }

  ngOnInit() {
  }
  getAlbunes(id){
    let observador:Observer<Album[]>={
      next: (data) => {
        //console.log(data);
        this.albums=data;
        console.log(this.albums);
      },
      error: (error) => {
        console.log(error);
        console.log('se produjo el siguiente error al recuperar un paquete');
      },
      complete: () => {
        console.log('proceso finalizado');
      }
    };
    this._albumService.getAlbums(id)
    .subscribe(observador);
  }
  verAlbum(index){
    console.log(index);
    this.router.navigate(['/cancion',index]);
  }
}
