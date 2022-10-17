import { Conta } from "./conta";

export class Transferencia {
	contaOrigem?: Conta
	contaDestino?: Conta
	valor?: number
	taxa?: number
	dataTransferencia?: Date
	dataAgendada?: Date

	constructor(contaOrigem: Conta, contaDestino: Conta, valor: number, dataTransferencia: Date, dataAgendada: Date) {
		this.contaOrigem = contaOrigem
		this.contaDestino = contaDestino
		this.valor = valor
		this.dataTransferencia = dataTransferencia
		this.dataAgendada = dataAgendada
	}
}
