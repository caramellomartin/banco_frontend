import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensaje } from '../models/mensaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private baseURL = "http://localhost:8080/api/mensajes";

  constructor(private httpClient: HttpClient) { }

  obtenerListaMensajes() : Observable<Mensaje[]> {
    return this.httpClient.get<Mensaje[]>(`${this.baseURL}`);
  }

  bucarMensajePorId(id: number) : Observable<Mensaje> {
    return this.httpClient.get<Mensaje>(`${this.baseURL}/${id}`);
  }

  nuevoMensaje(mensaje: Mensaje) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, mensaje);
  }

  actualizarMensaje(id: number, mensaje: Mensaje) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, mensaje);
  }

  eliminarMensaje(id: number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
