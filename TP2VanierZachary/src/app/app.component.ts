import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { TranslateService } from '@ngx-translate/core';  // Import TranslateService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Injecting SpotifyService and TranslateService
  constructor(
    private spotifyService: SpotifyService,
    private translate: TranslateService
  ) {
    // Set default language for translation
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    // Retrieve Spotify token on initialization
    this.spotifyService.getSpotifyToken().subscribe();
  }

  // Function to switch languages
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
