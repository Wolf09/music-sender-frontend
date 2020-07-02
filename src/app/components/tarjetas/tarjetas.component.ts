import { Component, OnInit, Input } from '@angular/core';
import { URL } from '../global/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items:any;
  @Input() index:any;
  url=URL;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  verAlbum(){
    console.log(this.index);
    this.router.navigate(['/album',this.index]);
  }
}
