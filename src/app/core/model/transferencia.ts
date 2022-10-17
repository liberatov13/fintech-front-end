import { Conta } from "./conta";

export class Transferencia {
	contaOrigem?: Conta
	contaDestino?: Conta
	valor?: number
	taxa?: number
	dataTransferencia?: Date
	dataAgendada?: Date

	constructor() {}
}
