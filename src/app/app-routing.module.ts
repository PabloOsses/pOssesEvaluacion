import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrNotaComponent} from '../app/cr-nota/cr-nota.component';
import {MinotasComponent} from '../app/minotas/minotas.component';
import {EdnotasComponent} from '../app/ednotas/ednotas.component';
const routes: Routes = [
  {path:'',component:CrNotaComponent},
  {path:'misnotas',component:MinotasComponent},
  {path:'editar/:id',component:EdnotasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
