import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { PokemonesPageRoutingModule } from './pokemones-routing.module';
import { PokemonesPage } from './pokemones.page';
import { MostrarInformacionComponent } from './../pokemones/mostrar-informacion/mostrar-informacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonesPageRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [PokemonesPage, MostrarInformacionComponent],
})

export class PokemonesPageModule {}
