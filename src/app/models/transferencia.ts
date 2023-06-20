export class Transferencia {
    id: number;
    concepto: string;
    fecha: Date;
    importe: number;
    beneficiario: any = {};
    ordenante: any = {};
}