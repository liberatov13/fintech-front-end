import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transferencia } from '../../core/model/transferencia';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	transferencia?: Transferencia;

	dataAgendada: Date = new Date();
	dataMinimaAgendamento = new Date();

	constructor() {	}

	ngOnInit(): void {
	}

	onSubmit(transferencia: NgForm) {

	}

}
