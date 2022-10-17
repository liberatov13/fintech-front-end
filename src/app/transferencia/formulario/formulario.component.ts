import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ContaService } from 'src/app/conta/conta.service';
import { Conta } from 'src/app/core/model/conta';
import { Transferencia } from '../../core/model/transferencia';
import { TransferenciaService } from '../transferencia.service';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	transferencia = new Transferencia();

	dataAgendada: Date = new Date();
	dataMinimaAgendamento = new Date();

	transferenciaRealizada = false

	constructor(
		private transferenciaService: TransferenciaService,
		private contaService: ContaService,
		private confirmationService: ConfirmationService
	) {	}

	ngOnInit(): void {
	}

	async onSubmit(transferenciaForm: NgForm) {
		this.transferencia.valor = transferenciaForm.value.valor
		this.transferencia.dataAgendada = transferenciaForm.value.dataAgendada

		await Promise.all([
			this.contaService.buscarPorNumero(transferenciaForm.value.contaDestino).toPromise(),
			this.transferenciaService.buscarTaxa(this.transferencia).toPromise(),
			this.contaService.buscarPorNumero('789123').toPromise()
		]).then(responses => {
			this.transferencia.contaDestino = responses[0]
			this.transferencia.taxa = responses[1]
			this.transferencia.contaOrigem = responses[2]
		})
		this.abrirDialog(this.transferencia)
	}

	abrirDialog(transferencia: Transferencia) {
		this.confirmationService.confirm({
			accept: () => {
				this.enviarTransferencia(transferencia)
			},

			message: `Enviar R$${transferencia.valor} para ${transferencia.contaDestino?.nomeTitular}?
			Será incluída uma taxa de R$${this.transferencia.taxa}
			Total: R$${this.transferencia.valor! + this.transferencia.taxa!}
			`
		})
	}

	enviarTransferencia(transferencia: Transferencia) {
		this.transferenciaService.cadastrar(transferencia).toPromise()
		window.location.reload()
	}

}
