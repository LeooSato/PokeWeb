import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';;


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }


  FindAllPokemon():Observable<any[]>{
    return this.http.get<any[]>(`https://pokeapi.co/api/v2/pokemon?limit=10`)
  }

  FindByGenderPokemon():Observable<any>{
    return this.http.get<any>("https://pokeapi.co/api/v2/type/")
  }

  getmorePokemon(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/type/${name}`)
  }

  getPokemon(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

  getpokebytype(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/type/${name}`)
  }

}
