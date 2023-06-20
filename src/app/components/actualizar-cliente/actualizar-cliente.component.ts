import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

  id: number;
  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService, private router:Router, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteService.bucarClientePorId(this.id).subscribe(dato =>{
      this.cliente = dato;
    }, error => console.log(error));
  }

  redireccionClientes() {
    this.router.navigate(['/clientes']);
  }

  onSubmit(){
    swal({
      title: '¿Estas seguro que quieres actualizar el cliente?',
      text: "Confirmar actualización del cliente",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, actualizar',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.clienteService.actualizarCliente(this.id, this.cliente).subscribe(dato => {
          this.redireccionClientes();
        }, error => console.log(error));
          swal(
            'Cliente actualizado',
            'El cliente ha sido actualizado con éxito',
            'success'
          )
      }
    })
  }
}
