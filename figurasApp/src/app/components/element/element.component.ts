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
  formulas$: Formula[];

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

  mostrarFormulas() {
    const div1 = document.querySelector('#info');
    div1.className = 'col-6 linea';
    const div = document.querySelector('#formulas');
    div.className = 'col-6 linea';
    const div2 = document.querySelector('#imagenes');
    div2.className = 'd-none';
  }

  mostrarImagenes() {
    const div1 = document.querySelector('#info');
    div1.className = 'col-6 linea';
    const div2 = document.querySelector('#formulas');
    div2.className = 'd-none';
    const div = document.querySelector('#imagenes');
    div.className = 'col-6 linea';
  }

  ocultarFormulas() {
    const div1 = document.querySelector('#info');
    div1.className = 'col-12 linea';
    const div = document.querySelector('#formulas');
    div.className = 'd-none';
    const div2 = document.querySelector('#imagenes');
    div2.className = 'd-none';
  }

  ocultarImagenes() {
    const div1 = document.querySelector('#info');
    div1.className = 'col-12 linea';
    const div2 = document.querySelector('#formulas');
    div2.className = 'd-none';
    const div = document.querySelector('#imagenes');
    div.className = 'd-none';
  }



}
