import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-transferencias',
  templateUrl: './lista-transferencias.component.html',
  styleUrls: ['./lista-transferencias.component.css']
})

export class ListaTransferenciasComponent implements OnInit {

  transferencias: Transferencia[];

  constructor(private transferenciaServicio: TransferenciaService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerTransferencias();
  }

  private obtenerTransferencias() {
    this.transferenciaServicio.obtenerListaTransferencias().subscribe(dato => {
      this.transferencias = dato;
    });
  }

  actualizarTransferencia(id: number) {
    this.router.navigate(['actualizar-transferencia', id]);
  }

  eliminarTransferencia(id: number){
    swal({
      title: '¿Estas seguro que quieres eliminar la transferencia?',
      text: "Confirma si deseas eliminar la transferencia",
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
        this.transferenciaServicio.eliminarTransferencia(id).subscribe(dato => {
          this.obtenerTransferencias();
          swal(
            'Transferencia eliminada',
            'La transferencia ha sido eliminada con éxito',
            'success'
          )
        })
      }
    })
  }
}
