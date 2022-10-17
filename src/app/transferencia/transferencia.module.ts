import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';


import { ListaComponent } from './lista/lista.component';
import { TransferenciaService } from './transferencia.service';


@NgModule({
	declarations: [
		FormularioComponent,
  	ListaComponent,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		InputTextModule,
		ButtonModule,
		CalendarModule,
		BrowserAnimationsModule,
		InputMaskModule,
		DialogModule,
		TableModule,
		InputNumberModule
	],
	providers: [TransferenciaService],
	exports: [
		FormularioComponent
	]

})
export class TransferenciaModule { }
