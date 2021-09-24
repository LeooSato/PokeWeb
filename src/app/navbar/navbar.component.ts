import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pokemons: any[] = [];
  pokemonsname: any[] = [] ;
  poke: any;
  listpoke : any ;

  constructor(private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(){
   this.findtype();
  }

  findtype(){
    this.pokemonService.FindByGenderPokemon().subscribe((resp:any)=>{
        resp.results.forEach((result: { name: string; })=>{
          this.pokemonService.getmorePokemon(result.name).subscribe((uniqresponse:any)=>{
            this.pokemons.push(uniqresponse);
          })     
        })
    })
  }


}
