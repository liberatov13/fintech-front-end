import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencia } from '../core/model/transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

	readonly hostUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

	cadastrar(transferencia: Transferencia) {
		const endpoint = `${this.hostUrl}/transferencias`;
		this.http.post(endpoint, transferencia);
	}
}
