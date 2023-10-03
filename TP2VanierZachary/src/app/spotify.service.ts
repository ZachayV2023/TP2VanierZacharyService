import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  public spotifyToken: string = '';
  private CLIENT_ID = '12abdb6497794808aa666c27974ef057';
  private CLIENT_SECRET = 'd0abd182a7d948038b8fadb02f5646a5';

  constructor(private http: HttpClient) { }

  getSpotifyToken(): Observable<any> {
    let body = new HttpParams().set('grant_type', 'client_credentials');
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(this.CLIENT_ID + ':' + this.CLIENT_SECRET)
      })
    };

    return this.http.post<any>('https://accounts.spotify.com/api/token', body.toString(), httpOptions)
      .pipe(tap(res => this.spotifyToken = res.access_token));
  }
}
