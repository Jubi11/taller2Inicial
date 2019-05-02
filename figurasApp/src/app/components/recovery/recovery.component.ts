import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  recoveryForm = new FormGroup({
    email: new FormControl(''),
  });

  constructor(private loginService: LoginService, private snotifyService: SnotifyService, private formBuilder: FormBuilder) {
    this.loginService.setTitulo('Recovery'); 
  }

  ngOnInit() {
    this.recoveryForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    }, {
        //validator: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit() {
    //console.warn(this.recoveryForm.value.email);
  }

  recovery(){
    if(this.recoveryForm.valid){
      this.loginService.recovery(this.recoveryForm.value.email);
    }else{
      this.snotifyService.warning('Debe especificar un correo válido', 'Atención'); 
    }
  }



}
