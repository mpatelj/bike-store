import { Component, OnInit } from '@angular/core';
import { PokeDataService } from '../../services/pokeData/poke-data.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
  providers: [PokeDataService]
})
export class PokemonComponent implements OnInit {
  poke: any;
  customPoke: string = '';
  url = 'https://pokeapi.co/api/v2/pokemon/pikachu/'

  constructor(private srv: PokeDataService) {}

  ngOnInit(){
    this.getPoke()
  }

  getPoke():void{
    this.srv.getData(this.url).subscribe(data=>this.poke=data);
  }

  changeURL():void{
    debugger;
    let pokemon2use = this.customPoke.toLocaleLowerCase();
    this.url = 'https://pokeapi.co/api/v2/pokemon/'+ pokemon2use + '/'
    this.getPoke();
  }
}