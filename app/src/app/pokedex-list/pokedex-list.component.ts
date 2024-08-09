import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex-list',
  // standalone: true,
  // imports: [],
  templateUrl: './pokedex-list.component.html',
  styleUrl: './pokedex-list.component.scss',
})
export class PokedexListComponent implements OnInit {
  pokemons: any[] = [];
  searchQuery: string = '';
  offset: number = 0;
  limit: number = 10;
  selectedPokemon: any; // Add this line to manage selected Pokémon

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService
      .getPokemons(this.limit, this.offset)
      .subscribe((response) => {
        this.pokemons = response.results;
      });
  }

  searchPokemons() {
    if (this.searchQuery) {
      this.pokemonService
        .getPokemonByName(this.searchQuery)
        .subscribe((pokemon) => {
          this.pokemons = [pokemon];
        });
    } else {
      this.loadPokemons();
    }
  }

  loadMore() {
    this.offset += this.limit;
    this.limit += 10;
    this.loadPokemons();
  }

  viewDetails(pokemon: any) {
    this.selectedPokemon = pokemon;
    this.router.navigate(['/pokemon', pokemon.name]);
  }
}
