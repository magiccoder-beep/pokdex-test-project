import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'http://127.0.0.1:3001/api';

  constructor(private http: HttpClient) {}

  getPokemons(limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemons?limit=${limit}&offset=${offset}`);
  }

  getPokemonByName(name: string): Observable<any> {
    console.log("Service Called", name)
    return this.http.get(`${this.apiUrl}/pokemon?name=${name}`);
  }
}
