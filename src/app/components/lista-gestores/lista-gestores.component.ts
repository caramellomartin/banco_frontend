import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gestor } from 'src/app/models/gestor';
import { GestorService } from 'src/app/services/gestor.service';

@Component({
  selector: 'app-lista-gestores',
  templateUrl: './lista-gestores.component.html',
  styleUrls: ['./lista-gestores.component.css']
})
export class ListaGestoresComponent implements OnInit {

  gestores:Gestor[];

  constructor(private gestorServicio:GestorService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerGestores();
  }

  private obtenerGestores() {
    this.gestorServicio.obtenerListaGestores().subscribe(dato => {
      this.gestores = dato;
    });
  }

  actualizarGestor(id: number) {
    this.router.navigate(['actualizar-gestor', id]);
  }

  eliminarGestor(id: number){
    swal({
      title: '¿Estas seguro que quieres eliminar el gestor?',
      text: "Confirma si deseas eliminar al gestor",
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
        this.gestorServicio.eliminarGestor(id).subscribe(dato => {
          this.obtenerGestores();
          swal(
            'Gestor eliminado',
            'El gestor ha sido eliminado con éxito',
            'success'
          )
        })
      }
    })
  }
}
