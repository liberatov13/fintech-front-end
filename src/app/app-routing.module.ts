import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './transferencia/formulario/formulario.component';
import { ListaComponent } from './transferencia/lista/lista.component';

const routes: Routes = [
	{path: 'transferencias/novo', component: FormularioComponent, },
	{path: 'transferencias', component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
