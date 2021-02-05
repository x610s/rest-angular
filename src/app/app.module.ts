import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';





//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './shared/loading/loading.component';



//rutas
import { ROUTES } from './app.routes';


//Servicios
import { SpotifyService } from './servicios/spotify.service';

//Pipes
import { NoImagesPipe } from './pipes/no-images.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoImagesPipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash:true})


  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
