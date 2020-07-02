import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { MusicsComponent } from './components/musics/musics.component';
import { SearchGenreComponent } from './components/search-genre/search-genre.component';
import { SearchMusicComponent } from './components/search-music/search-music.component';
import { PopularesComponent } from './components/populares/populares.component';
import { LanzamientosComponent } from './components/lanzamientos/lanzamientos.component';


const routes: Routes = [
  {path: '', component: ArtistsComponent },
  {path: 'album/:id', component: AlbumsComponent },
  {path: 'cancion/:id', component: MusicsComponent},
  { path: 'searchGenre', component: SearchGenreComponent },
  { path: 'populares', component: PopularesComponent },
  { path: 'lanzamientos', component: LanzamientosComponent },
  { path: 'search-music', component: SearchMusicComponent },
  { path: '**', pathMatch:'full', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }