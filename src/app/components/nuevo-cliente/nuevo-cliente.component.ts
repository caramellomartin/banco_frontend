import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  
  constructor(private clienteServicio: ClienteService, private router: Router) {}
  
  ngOnInit(): void {
  }

  guardarCliente() {
    this.clienteServicio.nuevoCliente(this.cliente).subscribe(dato => {
      this.redireccionListaClientes();
    }, error => console.log(error))
  }

  redireccionListaClientes() {
    this.router.navigate(['/clientes']);
  }

  onSubmit() {
    this.guardarCliente();
  }
}
