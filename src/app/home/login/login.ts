import { Component } from '@angular/core';
import { Loginservice } from '../../service/loginservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


username="";
  password="";
  error="";
  
  constructor(private loginservice:Loginservice){

  }
login(){
    const ok = this.loginservice.login(this.username,this.password);
    if(!ok){
      this.error="Credenciales incorrectas";
    }
  }
}