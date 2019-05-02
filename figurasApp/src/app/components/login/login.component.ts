import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl(''),
    pass: new FormControl(''),
  });

  constructor(private loginService: LoginService) {
    this.loginService.setTitulo('Please Login');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.loginForm.value.name); //Mostrar el nombre (usuario) en submit
  }

}
