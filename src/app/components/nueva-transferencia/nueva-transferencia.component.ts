import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.css']
})
export class NuevaTransferenciaComponent implements OnInit {

  transferencia: Transferencia = new Transferencia();
  
  constructor(private transferenciaServicio: TransferenciaService, private router: Router) {}
  
  ngOnInit(): void {
  }

  guardarTransferencia() {
    this.transferenciaServicio.nuevaTransferencia(this.transferencia).subscribe(dato => {
      this.redireccionListaTransferencias();
    }, error => console.log(error))
  }

  redireccionListaTransferencias() {
    this.router.navigate(['/transferencias']);
  }

  onSubmit() {
    this.guardarTransferencia();
  }
}
