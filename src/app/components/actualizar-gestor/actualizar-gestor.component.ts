import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gestor } from 'src/app/models/gestor';
import { GestorService } from 'src/app/services/gestor.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-gestor',
  templateUrl: './actualizar-gestor.component.html',
  styleUrls: ['./actualizar-gestor.component.css']
})
export class ActualizarGestorComponent implements OnInit {
  
  id:number;
  gestor: Gestor = new Gestor();

  constructor(private gestorService:GestorService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.gestorService.bucarGestorPorId(this.id).subscribe(dato =>{
      this.gestor = dato;
    }, error => console.log(error));
  }

  redireccionGestores() {
    this.router.navigate(['/gestores']);
  }

  onSubmit(){
    swal({
      title: '¿Estas seguro que quieres actualizar el gestor?',
      text: "Confirmar actualización del gestor",
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
        this.gestorService.actualizarGestor(this.id, this.gestor).subscribe(dato => {
          this.redireccionGestores();
        }, error => console.log(error));
          swal(
            'Gestor actualizado',
            'El gestor ha sido actualizado con éxito',
            'success'
          )
      }
    })
  }
}

