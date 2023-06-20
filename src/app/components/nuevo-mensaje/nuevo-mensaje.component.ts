import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/models/mensaje';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-nuevo-mensaje',
  templateUrl: './nuevo-mensaje.component.html',
  styleUrls: ['./nuevo-mensaje.component.css']
})
export class NuevoMensajeComponent implements OnInit {
  
  mensaje: Mensaje = new Mensaje();

  constructor(private mensajeServicio: MensajeService, private router: Router) {}
  
  ngOnInit(): void {
  }

  guardarMensaje() {
    this.mensajeServicio.nuevoMensaje(this.mensaje).subscribe(dato => {
      this.redireccionListaMensajes();
    }, error => console.log(error))
  }

  redireccionListaMensajes() {
    this.router.navigate(['/mensajes']);
  }

  onSubmit() {
    this.guardarMensaje();
  }
}
