import { Component, OnInit } from '@angular/core';
import { ContaService } from 'src/app/conta/conta.service';
import { Transferencia } from 'src/app/core/model/transferencia';
import { TransferenciaService } from '../transferencia.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

	transferencias: Transferencia[] = []

  constructor(private transferenciaService: TransferenciaService, private contaService: ContaService) { }

  ngOnInit(): void {
		this.contaService.buscarTransferencias('789123')
			.subscribe((response) => {
				this.transferencias = response
			})
		console.log(this.transferencias)
  }

}
