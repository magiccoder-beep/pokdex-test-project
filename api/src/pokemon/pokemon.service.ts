import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";

@Injectable()
export class PokemonService {
    constructor(private readonly httpService: HttpService) {}

    async getPokemons(limit: number, offset: number): Promise<any> {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await firstValueFrom(this.httpService.get(url));
        return response?.data;
    }

    async getPokemonByName(name: string): Promise<any> {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const response = await firstValueFrom(this.httpService.get(url));
        return response?.data;
    }
}
