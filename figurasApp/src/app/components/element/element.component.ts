import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  
  elementos$: Observable<Elemento[]>;
  elemento$: Elemento[];
  isElementRoute: boolean;
  nombre: string = null;

  constructor(public router: Router, public dataService: DataService, private route: ActivatedRoute) {
    this.nombre = this.route.snapshot.params['elementName'];
    this.elementos$ = dataService.getElementosByName(this.nombre);
  }

  ngOnInit() {
    //Realizar el subscribe aquí
    this.route.params.subscribe(routeParams => {
      this.elementos$ = this.dataService.getElementosByName(routeParams.elementName);
    });
  }

  goTo(route:string){
    this.router.navigateByUrl(route);
  }
}
