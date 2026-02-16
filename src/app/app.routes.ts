import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { IndexPublic as index } from './home/index-public/index-public';
import { Login } from './home/login/login';
import { loginGuardGuard } from './guards/login-guard-guard';
export const routes: Routes = [
    {path:'',component:index} ,
   {
    path: 'home/dashboard',
    loadComponent: () => import('./home/dashboard/dashboard').then(m => m.Dashboard), // ✅ Solo esto
    canActivate: [loginGuardGuard]
  },
   {path:'home/index',component:index} ,
    {path:'home/login',component:Login} ,
];
