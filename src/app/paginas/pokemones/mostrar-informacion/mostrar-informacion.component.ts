import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonParcial } from '../../../modelos/pokemon-parcial';

@Component({
  selector: 'app-mostrar-informacion',
  templateUrl: './mostrar-informacion.component.html',
  styleUrls: ['./mostrar-informacion.component.scss'],
})
export class MostrarInformacionComponent implements OnInit {
  @Input() public urlPokemon: string = '';
  public pokemonParcial!: PokemonParcial;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get<PokemonParcial>(this.urlPokemon)
    .subscribe(resultadoPokemon => {
    this.pokemonParcial = resultadoPokemon;
    })
  }

}
