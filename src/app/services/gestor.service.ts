import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gestor } from '../models/gestor';

@Injectable({
  providedIn: 'root'
})
export class GestorService {
  
  //Endpoint GET ALL Gestores
  private baseURL = "http://localhost:8080/api/gestores";

  constructor(private httpClient: HttpClient) { }

  obtenerListaGestores() : Observable<Gestor[]> {
    return this.httpClient.get<Gestor[]>(`${this.baseURL}`);
  }

  nuevoGestor(gestor: Gestor) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, gestor);
  }

  bucarGestorPorId(id:number) : Observable<Gestor> {
    return this.httpClient.get<Gestor>(`${this.baseURL}/${id}`);
  }

  actualizarGestor(id: number, gestor: Gestor) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, gestor);
  }

  eliminarGestor(id: number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
