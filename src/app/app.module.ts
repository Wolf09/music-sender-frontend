import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { MusicsComponent } from './components/musics/musics.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AppRoutingModule } from './app-routing.module';
import { MusicsService } from './services/musics.service';
import { ArtistsService } from './services/artists.service';
import { AlbumsService } from './services/albums.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchGenreComponent } from './components/search-genre/search-genre.component';
import { SearchMusicComponent } from './components/search-music/search-music.component';
import { PopularesComponent } from './components/populares/populares.component';
import { LanzamientosComponent } from './components/lanzamientos/lanzamientos.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    MusicsComponent,
    AlbumsComponent,
    TarjetasComponent,
    LoadingComponent,
    NavbarComponent,
    SearchGenreComponent,
    SearchMusicComponent,
    PopularesComponent,
    LanzamientosComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    MusicsService,
    ArtistsService,
    AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
