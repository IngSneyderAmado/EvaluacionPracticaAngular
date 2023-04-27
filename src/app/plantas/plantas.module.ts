import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantasRoutingModule } from './plantas-routing.module';
import { PlantaListComponent } from './components/planta-list/planta-list.component';


@NgModule({
  declarations: [
    PlantaListComponent
  ],
  imports: [
    CommonModule,
    PlantasRoutingModule
  ],
  exports: [PlantaListComponent]
})
export class PlantasModule { }
