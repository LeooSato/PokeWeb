import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokeview',
  templateUrl: './pokeview.component.html',
  styleUrls: ['./pokeview.component.css']
})
export class PokeviewComponent implements OnInit {
  pokemon:any;
  constructor(private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(){
    let name = this.route.snapshot.params['name']
    this.getpokemon(name);
  }

  getpokemon(name:string){
    this.pokemonService.getPokemon(name).subscribe((resp:any)=>{
      this.pokemon = resp
      console.log(this.pokemon)
    })
  }
}
