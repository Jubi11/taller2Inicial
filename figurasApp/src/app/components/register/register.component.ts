import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registroForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
    confirm: new FormControl(''),
  });

  constructor(private loginService: LoginService, private snotifyService: SnotifyService, private formBuilder: FormBuilder) {
   this.loginService.setTitulo('Register');
  }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]],
  }, {
      validator: this.MustMatch('pass', 'confirm')
  });
  }
  
  onSubmit() {
    
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

  register() {
    if(this.registroForm.valid){ 
      const user:Usuario={
        'email':this.registroForm.value.email,
        'nombre':"Prueba",
        'roles':'Viewer',
        'userId':"1"
      }
     this.loginService.register(user,this.registroForm.value.pass);
    }else{ 
      this.snotifyService.warning('Nombre, Correo o contraseña incorrectos', 'No se puede guardar'); 
    } 
 }


}
