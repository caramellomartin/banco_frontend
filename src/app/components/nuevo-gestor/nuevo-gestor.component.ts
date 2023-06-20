import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gestor } from 'src/app/models/gestor';
import { GestorService } from 'src/app/services/gestor.service';

@Component({
  selector: 'app-nuevo-gestor',
  templateUrl: './nuevo-gestor.component.html',
  styleUrls: ['./nuevo-gestor.component.css']
})
export class NuevoGestorComponent implements OnInit {
  
  gestor: Gestor = new Gestor();
  
  constructor(private gestorServicio: GestorService, private router: Router) {}
  
  ngOnInit(): void {
  }

  guardarGestor() {
    this.gestorServicio.nuevoGestor(this.gestor).subscribe(dato => {
      this.redireccionListaGestores();
    }, error => console.log(error))
  }

  redireccionListaGestores() {
    this.router.navigate(['/gestores']);
  }

  onSubmit() {
    this.guardarGestor();
  }

}
