import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

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
  ];

  constructor() { }

  getCapitalizedCategory(category: any) {
    return category.substring(0, 1).toUpperCase() + category.substring(1, category.length);
  }

  ngOnInit(): void {
  }

}
