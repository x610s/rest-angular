import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  artistaBuscado: any[] = [];
  loading: boolean;
  constructor(private _service: SpotifyService) {

  }

  buscarArtista(termino: string): void {
    if (termino) {
      this.loading = true;
      this._service.getArtists(termino).subscribe((data: any) => {
        this.artistaBuscado = data;
        setTimeout(() => {
          this.loading = false;
        }, 1500);
      })
    }

  }
}
