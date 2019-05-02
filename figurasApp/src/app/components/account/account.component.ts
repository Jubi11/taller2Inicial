import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  titulo: string;
  titleSuscription: Subscription;
  
  constructor(private loginService: LoginService, private router:Router) {
    this.titleSuscription = this.loginService.getTitulo().subscribe((titulo) => {
      this.titulo = titulo;
    });
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.titleSuscription.unsubscribe();
  }

  goTo(route:string){
    this.router.navigateByUrl(route);
  }

}
