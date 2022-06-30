import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any;
  public getAllPokemons: any;

<<<<<<< HEAD
  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}
=======
  pokemons = [
    {
      name: 'Bulbasaur',
      thumbnail: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/10007.png?raw=true',
      categories: [
        'poison',
        'grass'
      ],
    },
    {
      name: 'Charmander',
      thumbnail: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/10018.png?raw=true',
      categories: [
        'fire',
      ],
    },
    {
      name: 'Bulbasaur',
      thumbnail: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/10007.png?raw=true',
      categories: [
        'poison',
        'grass'
      ],
    },
    {
      name: 'Charmander',
      thumbnail: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/10018.png?raw=true',
      categories: [
        'fire',
      ],
    },
    {
      name: 'Bulbasaur',
      thumbnail: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/10007.png?raw=true',
      categories: [
        'poison',
        'grass'
      ],
    },
    {
      name: 'Charmander',
      thumbnail: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/10018.png?raw=true',
      categories: [
        'fire',
      ],
    },
  ];

  constructor() { }
>>>>>>> master

  getCapitalizedCategory(category: any) {
    return category.substring(0, 1).toUpperCase() + category.substring(1, category.length);
  }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      (res) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      (error) => {
        this.apiError = true;
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
