import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent implements OnInit {


  @Input() items: any[] = [];
  constructor(private _routes: Router) { }

  ngOnInit(): void {
  }

  verArtista(item: any) {
    let artisteId;
    if (item.type === 'artist') {
      artisteId = item.id
    } else {
      artisteId = item.artists[0].id;
    }
    this._routes.navigate(['/artista', artisteId])
  }

}
