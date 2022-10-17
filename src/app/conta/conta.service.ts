import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from '../core/model/conta';
import { Transferencia } from '../core/model/transferencia';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

	readonly url = 'http://localhost:8080/contas'

  constructor(private http: HttpClient) { }

	buscarTransferencias(conta: string): Observable<Transferencia[]> {
		const endpoint = `${this.url}/${conta}/transferencias`;
		return this.http.get<Transferencia[]>(endpoint)
	}

	buscarPorNumero(numero: string): Observable<Conta> {
		const endpoint = `${this.url}/${numero}`
		return this.http.get<Conta>(endpoint)
	}
}
