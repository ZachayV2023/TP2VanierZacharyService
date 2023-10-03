import { Component, OnInit } from '@angular/core';
import { DataService, SpotifySearchResponse } from '../data.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent implements OnInit {
  public artists: Artist[] = [];
  public searchTerm: string = '';

  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.data.artists$.subscribe(artists => {
      this.artists = artists;
    });
  } 

  search(): void {
    this.data.searchArtists(this.searchTerm).subscribe((response: SpotifySearchResponse) => {
      console.log("Spotify Search Response: ", response);
      this.artists = response.artists.items.map(artist => {
        const imageUrl = artist.images && artist.images.length ? artist.images[0].url : '';
        return new Artist(artist.name, imageUrl, artist.id);
      });
      console.log("Artists Array: ", this.artists);
    }, error => {
      console.log("Error: ", error);
    });
  }
}
