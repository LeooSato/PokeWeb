import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokeview',
  templateUrl: './pokeview.component.html',
  styleUrls: ['./pokeview.component.css']
})
export class PokeviewComponent implements OnInit {


  pokemons: any[] = [];


  constructor(private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(){
    let name = this.route.snapshot.params['name']
    this.recebepokemon(name)
  }

  recebepokemon(name:string){
  this.pokemonService.getPokemon(name).subscribe((resp)=>{
    this.pokemons.push(resp);
    console.log(this.pokemons)
  })

  }



}
