import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = "http://localhost:8080/api/clientes";

  constructor(private httpClient: HttpClient) { }

  obtenerListaClientes() : Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }

  bucarClientePorId(id:number) : Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
  }

  nuevoCliente(cliente: Cliente) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, cliente);
  }

  actualizarCliente(id: number, cliente: Cliente) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, cliente);
  }

  eliminarCliente(id: number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
