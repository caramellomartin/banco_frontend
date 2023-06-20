import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaGestoresComponent } from './components/lista-gestores/lista-gestores.component';

import { HttpClientModule } from '@angular/common/http';
import { NuevoGestorComponent } from './components/nuevo-gestor/nuevo-gestor.component'
import { FormsModule } from '@angular/forms';
import { ActualizarGestorComponent } from './components/actualizar-gestor/actualizar-gestor.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';
import { ListaTransferenciasComponent } from './components/lista-transferencias/lista-transferencias.component';
import { NuevaTransferenciaComponent } from './components/nueva-transferencia/nueva-transferencia.component';
import { ActualizarTransferenciaComponent } from './components/actualizar-transferencia/actualizar-transferencia.component';
import { ListaMensajesComponent } from './components/lista-mensajes/lista-mensajes.component';
import { NuevoMensajeComponent } from './components/nuevo-mensaje/nuevo-mensaje.component';
import { ActualizarMensajeComponent } from './components/actualizar-mensaje/actualizar-mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaGestoresComponent,
    NuevoGestorComponent,
    ActualizarGestorComponent,
    ListaClientesComponent,
    NuevoClienteComponent,
    ActualizarClienteComponent,
    ListaTransferenciasComponent,
    NuevaTransferenciaComponent,
    ActualizarTransferenciaComponent,
    ListaMensajesComponent,
    NuevoMensajeComponent,
    ActualizarMensajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
