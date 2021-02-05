import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/servicios/spotify.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {
  faCoffee = faCoffee;
  loading: Boolean;
  artista: any = {};
  topTracks:any = {}

  constructor(private _activatedRoute: ActivatedRoute,
    private _service: SpotifyService) {
      this.loading=true
    this._activatedRoute.params.subscribe(params => {
      this.getArtistaById(params['id']);
      this.getTopTracksById(params['id']);
    });
   setTimeout(() => {
    this.loading=false;
   }, 2000);



  }



  getArtistaById(params) {
    this._service.getArtist(params)
      .subscribe(artista => {
        this.artista = artista;
      })
  }
  getTopTracksById(id:string){
    this._service.getTopTracks(id)
    .subscribe(topTracks =>{
     this.topTracks = topTracks;
     console.log(this.topTracks);

    })

  }

}
