import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Artist } from './artist';
import { SpotifyService } from './spotify.service';

export interface SpotifySearchResponse {
  artists: {
    items: {
      name: string;
      images: { url: string }[];
      id: string;
    }[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly _artists = new BehaviorSubject<Artist[]>([]);
  public readonly artists$ = this._artists.asObservable();
  private readonly baseUrl: string = 'https://api.spotify.com/v1/search';

  constructor(private http: HttpClient, private spotifyService: SpotifyService) {
    this.loadArtistsFromStorage();
  }

  loadArtistsFromStorage(): void {
    const savedArtists = localStorage.getItem('artists');
    if (savedArtists) {
      this._artists.next(JSON.parse(savedArtists));
    }
  }

  saveArtistsToStorage(): void {
    const currentArtists = this._artists.getValue();
    localStorage.setItem('artists', JSON.stringify(currentArtists));
  }

  addArtist(artist: Artist): void {
    const tempArtists = this._artists.getValue();
    tempArtists.push(artist);
    this._artists.next(tempArtists);
    this.saveArtistsToStorage();
  }

  searchArtists(query: string): Observable<SpotifySearchResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.spotifyService.spotifyToken}`
    });
    return this.http.get<SpotifySearchResponse>(`${this.baseUrl}?q=${query}&type=artist`, { headers });
  }
}
