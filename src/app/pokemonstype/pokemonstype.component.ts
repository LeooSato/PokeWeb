import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemonstype',
  templateUrl: './pokemonstype.component.html',
  styleUrls: ['./pokemonstype.component.css']
})
export class PokemonstypeComponent implements OnInit {

  pokemons: any[] = [];
  pokemonsname: any[] = [] ;
  poke: any;
  listpoke : any ;

  constructor(private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute) { }
    
  ngOnInit() {
    let name = this.route.snapshot.params['name']
    this.findpokear(name);
  }

  findpokear(name:string){
  this.pokemonService.getpokebytype(name).subscribe((resp:any)=>{
    for(let i=0;i<resp.pokemon.length;i++){
    this.pokemonsname[i] = resp.pokemon[i].pokemon.name;
  }
  console.log(this.pokemonsname)
  })
  }
  getpokename(name:string){
    this.pokemonService.getPokemon(name).subscribe((resp:any)=>{
        this.poke = resp;
    })
  }

  findpokegender(name:string){
    this.pokemonService.getpokebytype(name).subscribe((resp:any)=>{
      this.listpoke = resp
      console.log(this.listpoke.pokemon)
    })
  }
}
