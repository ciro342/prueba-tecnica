import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class Loginservice {
   private user = "admin";
  private pass = "1234";

  constructor(private router: Router) {}

  login(username:string,password:string){
    if(username === this.user && password === this.pass){
      localStorage.setItem("auth","true");
      this.router.navigate(['/home/dashboard']);
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem("auth");
    this.router.navigate(['/index']);
  }

  isLogged(){
    return localStorage.getItem("auth") === "true";
  }

}
