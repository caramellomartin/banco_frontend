import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/models/mensaje';
import { MensajeService } from 'src/app/services/mensaje.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-mensajes',
  templateUrl: './lista-mensajes.component.html',
  styleUrls: ['./lista-mensajes.component.css']
})
export class ListaMensajesComponent implements OnInit {
  mensajes: Mensaje[];

  constructor(private mensajeServicio: MensajeService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerMensajes();
  }

  private obtenerMensajes() {
    this.mensajeServicio.obtenerListaMensajes().subscribe(dato => {
      this.mensajes = dato;
    });
  }

  actualizarMensaje(id: number) {
    this.router.navigate(['actualizar-mensaje', id]);
  }

  eliminarMensaje(id: number){
    swal({
      title: '¿Estas seguro que quieres eliminar este mensaje?',
      text: "Confirma si deseas eliminar el mensaje",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elimínala',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.mensajeServicio.eliminarMensaje(id).subscribe(dato => {
          this.obtenerMensajes();
          swal(
            'Mensaje eliminado',
            'El Mensaje ha sido eliminada con éxito',
            'success'
          )
        })
      }
    })
  }
}
