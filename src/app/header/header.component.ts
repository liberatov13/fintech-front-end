import { Component, OnInit } from '@angular/core';
import { ContaService } from '../conta/conta.service';
import { Conta } from '../core/model/conta';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	conta?: Conta

  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
		this.contaService.buscarPorNumero('789123').subscribe((response) => {
			this.conta = response
		})
  }

}
