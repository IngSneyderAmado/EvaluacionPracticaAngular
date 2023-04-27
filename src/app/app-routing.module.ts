import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantaListComponent } from './plantas/components/planta-list/planta-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home' , component: PlantaListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
