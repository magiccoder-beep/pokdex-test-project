import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexAppComponent } from './pokedex-app.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';

const routes: Routes = [
  { path: 'pokemon/:name', component: PokemonDetailComponent },
  { path: '', component: PokedexListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
