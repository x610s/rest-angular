import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _HttpClient: HttpClient) { }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`
    const HEADERS = new HttpHeaders({
      'Authorization': 'Bearer BQCFlXdf7AP8hO9bi9CK9SoootV8Zj4zciYCQHPfReTYVvhtMVf0u2D-2YeTcOD7mYnHr__2Ieuj1Qd3Pk8'
    });

    return this._HttpClient.get(URL, { headers: HEADERS });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));


  }

  getArtists(termino: string) {
    if (termino) {
      return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
        .pipe(map(data => data['artists'].items));

    }
  }

  getArtist(termino: string) {
    return this.getQuery(`artists/${termino}`);
  }

  getTopTracks(idAutor: string) {
    return this.getQuery(`artists/${idAutor}/top-tracks?market=US`)
    .pipe(map(data=> data['tracks']))
  }

}
