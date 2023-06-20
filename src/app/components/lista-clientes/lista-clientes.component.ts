import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes:Cliente[];

  constructor(private clienteServicio:ClienteService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  private obtenerClientes() {
    this.clienteServicio.obtenerListaClientes().subscribe(dato => {
      this.clientes = dato;
    });
  }

  actualizarCliente(id: number) {
    this.router.navigate(['actualizar-cliente', id]);
  }

  eliminarCliente(id: number){
    swal({
      title: '¿Estas seguro que quieres eliminar el cliente?',
      text: "Confirma si deseas eliminar al cliente",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.clienteServicio.eliminarCliente(id).subscribe(dato => {
          this.obtenerClientes();
          swal(
            'Cliente eliminado',
            'El cliente ha sido eliminado con éxito',
            'success'
          )
        })
      }
    })
  }
}
