import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex-app.component.html',
  styleUrls: ['./pokedex-app.component.scss'],
})
export class PokedexAppComponent {
  title = 'pokedex';
}
