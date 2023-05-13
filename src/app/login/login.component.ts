import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log('Iniciar sesión');

    console.log('Usuario ' + this.username);
    console.log('Contraseña ' + this.password);
  }
}
