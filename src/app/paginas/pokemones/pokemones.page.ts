import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {InfoPokemon} from './../../modelos/info-pokemon';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})

// metodo get modo predetrminado de los navegadores

export class PokemonesPage implements OnInit {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/';

  public resultado: InfoPokemon = {
    count: 0,
    results: []
  };

  constructor( private httpClient: HttpClient ) { }

  ngOnInit() {
    this.httpClient.get<InfoPokemon>(this.url)
    .subscribe(resultadoPeticion => {
      console.log ("resultadoPeticion");
      this.resultado = resultadoPeticion;
    })
  }
}
