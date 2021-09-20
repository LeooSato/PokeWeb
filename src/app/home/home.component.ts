import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons: any[] = [];
  constructor(private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(){
    window.scroll(0,1)


    // this.pokemonService.FindAllPokemon().
    // subscribe((response : any[])=>{
    //   response.results.forEach((result: { name: string; })=>{
    //     this.pokemonService.getmorePokemon(result.name)
    //     .subscribe((uniqresponse: any[])=>{
    //       this.pokemons.push(uniqresponse);
    //       console.log(this.pokemons)
    //     }
    //   )})
    // })
  this.findgenders();
  console.log(this.pokemons)
  }


    
  
findgenders(){
  this.pokemonService.FindByGenderPokemon().subscribe((resp:any)=>{
      resp.results.forEach((result: { name: string; })=>{
        this.pokemonService.getmorePokemon(result.name).subscribe((uniqresponse:any)=>{
          this.pokemons.push(uniqresponse);
        })     
      })
  })
}

  
}
