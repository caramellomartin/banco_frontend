import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensaje } from 'src/app/models/mensaje';
import { MensajeService } from 'src/app/services/mensaje.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-mensaje',
  templateUrl: './actualizar-mensaje.component.html',
  styleUrls: ['./actualizar-mensaje.component.css']
})
export class ActualizarMensajeComponent implements OnInit {

  id: number;
  mensaje: Mensaje = new Mensaje();

  constructor(private mensajeService: MensajeService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mensajeService.bucarMensajePorId(this.id).subscribe(dato =>{
      this.mensaje = dato;
    }, error => console.log(error));
  }

  redireccionMensajes() {
    this.router.navigate(['/mensajes']);
  }

  onSubmit(){
    swal({
      title: '¿Estas seguro que quieres actualizar el mensaje?',
      text: "Confirmar actualización del mensaje",
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
        this.mensajeService.actualizarMensaje(this.id, this.mensaje).subscribe(dato => {
          this.redireccionMensajes();
        }, error => console.log(error));
          swal(
            'Mensaje actualizado',
            'El Mensaje ha sido actualizada con éxito',
            'success'
          )
      }
    })
  }
}
