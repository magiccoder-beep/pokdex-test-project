import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PokedexAppComponent } from './pokedex-app.component';
import { PokemonService } from './pokemon/pokemon.service';
import { AppRoutingModule } from './pokedex-app.routes';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PokemonService],
  declarations: [PokedexAppComponent, PokemonDetailComponent, PokedexListComponent],
  bootstrap: [PokedexAppComponent],
})
export class PokedexAppModule {}
