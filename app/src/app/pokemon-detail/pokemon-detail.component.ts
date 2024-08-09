import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon.service';

interface PokemonType {
  type: {
    name: string;
  };
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  sprites: {
    front_default: string;
  };
}

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | undefined;
  types: string = '';

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit called');

    // Subscribe to route parameters
    this.route.paramMap.subscribe((params) => {
      const name = params.get('name');
      console.log('Pokémon name from route:', name);

      if (name) {
        this.pokemonService.getPokemonByName(name).subscribe(
          (pokemon) => {
            console.log('Received Pokémon data:', pokemon);
            this.pokemon = pokemon;
            this.types = pokemon.types
              .map((t: PokemonType) => t.type.name)
              .join(', ');
            console.log('Types:', this.types);
          },
          (error) => {
            console.error('Error fetching Pokémon data:', error);
          }
        );
      } else {
        console.error('No Pokémon name provided in the route');
      }
    });
  }
}
