import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaGestoresComponent } from './components/lista-gestores/lista-gestores.component';
import { NuevoGestorComponent } from './components/nuevo-gestor/nuevo-gestor.component';
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

const routes: Routes = [
  {path: '', redirectTo: 'gestores', pathMatch: 'full'},
  {path: 'gestores', component: ListaGestoresComponent},
  {path: 'nuevo-gestor', component: NuevoGestorComponent},
  {path: 'actualizar-gestor/:id', component: ActualizarGestorComponent},
  {path: 'clientes', component: ListaClientesComponent},
  {path: 'nuevo-cliente', component: NuevoClienteComponent},
  {path: 'actualizar-cliente/:id', component: ActualizarClienteComponent},
  {path: 'transferencias', component: ListaTransferenciasComponent},
  {path: 'nueva-transferencia', component: NuevaTransferenciaComponent},
  {path: 'actualizar-transferencia/:id', component: ActualizarTransferenciaComponent},
  {path: 'mensajes', component: ListaMensajesComponent},
  {path: 'nuevo-mensaje', component: NuevoMensajeComponent},
  {path: 'actualizar-mensaje/:id', component: ActualizarMensajeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
