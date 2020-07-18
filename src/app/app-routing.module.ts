import { DetalhesempresaComponent } from './detalhesempresa/detalhesempresa.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { EditarempresaComponent } from './editarempresa/editarempresa.component';
import { InsertempresaComponent } from './insertempresa/insertempresa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'detalhesempresa', component: DetalhesempresaComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'editarempresa', component: EditarempresaComponent },
  { path: 'insertempresa', component: InsertempresaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DetalhesempresaComponent,
  EmpresasComponent,
  EditarempresaComponent,
  InsertempresaComponent
   ];