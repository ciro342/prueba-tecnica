import { Component } from '@angular/core';
import { Loginservice } from '../../service/loginservice';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private loginservice:Loginservice, private router:Router){

  }
  logout() {
    Swal.fire({
      title: '¿Cerrar sesión?',
      text: '¿Estás seguro que quieres salir?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6366f1',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.loginservice.logout();
        
        Swal.fire({
          title: '¡Hasta luego!',
          text: 'Sesión cerrada correctamente',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          this.router.navigate(['/']); 
        });
      }
    });
  }

}