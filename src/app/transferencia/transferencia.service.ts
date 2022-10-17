import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../core/model/transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

	readonly url = 'http://localhost:8080/transferencias'

  constructor(private http: HttpClient) { }

	cadastrar(transferencia: Transferencia) {
		return this.http.post(this.url, transferencia);
	}

	buscarTaxa(transferencia: Transferencia): Observable<number> {
		const endpoint = `${this.url}/taxa/calcular?valor=${transferencia.valor}&dataAgendada=${transferencia.dataAgendada?.toISOString()}`;
		return this.http.get<number>(endpoint);
	}
}
