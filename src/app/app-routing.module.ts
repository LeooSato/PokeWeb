import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonstypeComponent} from './pokemonstype/pokemonstype.component';
import { PokeviewComponent } from './pokeview/pokeview.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'poketype/:name', component:PokemonstypeComponent},
  {path:'pokeview/:name', component:PokeviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
