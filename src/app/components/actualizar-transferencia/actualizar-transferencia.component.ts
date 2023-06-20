import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-transferencia',
  templateUrl: './actualizar-transferencia.component.html',
  styleUrls: ['./actualizar-transferencia.component.css']
})
export class ActualizarTransferenciaComponent implements OnInit {

  id: number;
  transferencia: Transferencia = new Transferencia();

  constructor(private transferenciaService: TransferenciaService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.transferenciaService.bucarTransferenciaPorId(this.id).subscribe(dato =>{
      this.transferencia = dato;
    }, error => console.log(error));
  }

  redireccionTransferencias() {
    this.router.navigate(['/transferencias']);
  }

  onSubmit(){
    swal({
      title: '¿Estas seguro que quieres actualizar la transferencia?',
      text: "Confirmar actualización de transferencia",
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
        this.transferenciaService.actualizarTransferencia(this.id, this.transferencia).subscribe(dato => {
          this.redireccionTransferencias();
        }, error => console.log(error));
          swal(
            'Transferencia actualizada',
            'La Transferencia ha sido actualizada con éxito',
            'success'
          )
      }
    })
  }
}
