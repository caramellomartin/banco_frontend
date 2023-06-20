import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencia } from '../models/transferencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private baseURL = "http://localhost:8080/api/transferencias";

  constructor(private httpClient: HttpClient) { }

  obtenerListaTransferencias() : Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(`${this.baseURL}`);
  }

  bucarTransferenciaPorId(id: number) : Observable<Transferencia> {
    return this.httpClient.get<Transferencia>(`${this.baseURL}/${id}`);
  }

  nuevaTransferencia(transferencia: Transferencia) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, transferencia);
  }

  actualizarTransferencia(id: number, transferencia: Transferencia) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, transferencia);
  }

  eliminarTransferencia(id: number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
