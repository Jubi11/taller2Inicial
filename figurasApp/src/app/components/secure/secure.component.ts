import { Component, OnInit } from '@angular/core'; 
import { Router, Data } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';


@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  
  

  constructor(private router:Router, dataService: DataService) {
    //this.elementos$ = dataService.getAllElementos();
   }

  ngOnInit() {
  }
  goTo(route:string){
    this.router.navigateByUrl(route);

  }
}
