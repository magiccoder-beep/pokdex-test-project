import { Controller, Get, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('api')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('pokemons')
  async getPokemons(@Query('limit') limit: number, @Query('offset') offset: number) {
    console.log("Request arrived from frontend-side", limit, offset);
    return this.pokemonService.getPokemons(limit, offset);
  }

  @Get('pokemon')
  async getPokemonByName(@Query('name') name: string) {
    return this.pokemonService.getPokemonByName(name);
  }
}
