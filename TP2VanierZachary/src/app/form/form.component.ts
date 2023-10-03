import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  artistName = '';

  constructor(public data: DataService) {}

  ngOnInit(): void {
  }

  addArtist(): void {
    if (this.artistName.trim()) {
      this.data.searchArtists(this.artistName).subscribe((response) => {
        const firstArtist = response.artists.items[0];
        if (firstArtist) {
          const newArtist = new Artist(
            firstArtist.name,
            firstArtist.images[0]?.url || 'placeholderImageUrl',
            firstArtist.id
          );
          this.data.addArtist(newArtist);
        }
      });
      this.artistName = '';
    }
  }  
}
