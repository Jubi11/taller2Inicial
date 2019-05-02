import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  recoveryForm = new FormGroup({
    email: new FormControl(''),
  });

  constructor(private loginService: LoginService) {
    this.loginService.setTitulo('Recovery'); 
  }

  ngOnInit() {
  }

  onSubmit() {
    //console.warn(this.recoveryForm.value.email);
  }

}
