import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaService } from "./conta.service";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		HttpClientModule
  ],
	providers: [ ContaService ]
})
export class ContaModule { }
