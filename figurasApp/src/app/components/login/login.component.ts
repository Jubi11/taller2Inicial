import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Declaracion del formulario
  loginForm = new FormGroup({
    name: new FormControl(),
    pass: new FormControl(),
  });

  constructor(private loginService: LoginService, private snotifyService: SnotifyService, private formBuilder: FormBuilder) {
    this.loginService.setTitulo('Please Login');
  }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.email]],
        pass: ['', [Validators.required, Validators.minLength(6)]],
    }, {
        //validator: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit() {
    //console.warn(this.loginForm.value.name); //Mostrar el nombre (usuario) en submit
  }

  mostrarNotif()
  {
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value.name, this.loginForm.value.pass);
    }else{
      this.snotifyService.warning('Datos inválidos', 'Atención'); 
    }
  }

}
