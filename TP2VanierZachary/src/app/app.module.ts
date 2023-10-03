import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { AlbumsComponent } from './albums/albums.component';
import { ChansonsComponent } from './chansons/chansons.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing.module';

import { SpotifyService } from './spotify.service';
import { DataService } from './data.service';

// Factory function for the translation loader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ArtisteComponent,
    ConcertsComponent,
    AlbumsComponent,
    ChansonsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    SpotifyService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
