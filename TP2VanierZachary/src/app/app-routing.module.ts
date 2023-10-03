import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtisteComponent } from './artiste/artiste.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { AlbumsComponent } from './albums/albums.component';
import { ChansonsComponent } from './chansons/chansons.component';

const routes: Routes = [
  { path: '', component: ArtisteComponent },
  { path: 'artistes/:name/concerts', component: ConcertsComponent },
  { path: 'artistes/:name/albums', component: AlbumsComponent },
  { path: 'albums/:id/chansons', component: ChansonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
