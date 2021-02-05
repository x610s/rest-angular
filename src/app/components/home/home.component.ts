import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {

  newReleases: any[] = [];
  loading: boolean;

  constructor(private _service: SpotifyService) {
    this.loading = true;


    this._service.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
        setTimeout(() => {
          this.loading = false;
        }, 1500);

    })

  }



}
