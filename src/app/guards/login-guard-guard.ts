import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const loginGuardGuard: CanActivateFn = () => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  
  // Verificar si estamos en el navegador
  const isBrowser = isPlatformBrowser(platformId);
  
  console.log('🔍 Guard ejecutándose...');
  console.log('🌐 ¿Estamos en navegador?', isBrowser);
  
  // Si estamos en servidor, permitir paso (luego el cliente verificará)
  if (!isBrowser) {
    console.log('🖥️ SSR - permitiendo paso temporal');
    return true;
  }

  // Aquí ya estamos seguros que estamos en navegador
  const authData = localStorage.getItem('auth');
  console.log('📦 auth en localStorage:', authData);

  const isLogged = !!authData; // O usa tu servicio auth.isLogged()
  console.log('✅ isLogged():', isLogged);

  if (isLogged) {
    console.log('➡️ Acceso PERMITIDO a dashboard');
    return true;
  }

  console.log('➡️ Acceso DENEGADO');
  
  // SweetAlert solo en navegador
  import('sweetalert2').then((Swal) => {
    Swal.default.fire({
      title: 'Acceso denegado',
      text: 'Debes iniciar sesión para acceder a esta página',
      icon: 'error',
      confirmButtonText: 'Ir al login',
      confirmButtonColor: '#3085d6'
    }).then((result) => {
      if (result.isConfirmed) {
        router.navigate(['/home/login']);
      }
    });
  });

  return false;
};