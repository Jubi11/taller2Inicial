import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registroForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
  });

  constructor(private loginService: LoginService) {
   this.loginService.setTitulo('Register');
  }

  ngOnInit() {
  }

  
  onSubmit() {
    
  }

}
