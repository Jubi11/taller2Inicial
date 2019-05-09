    import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { Subscription } from 'rxjs';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-element-admin',
  templateUrl: './element-admin.component.html',
  styleUrls: ['./element-admin.component.css']
})
export class ElementAdminComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.iniciarElemento();
  }

  iniciarElemento = () => {
    this.formGroup = this.formBuilder.group({
      descripcion: ['', [Validators.required, Validators.minLength(15)]],
      formulas: this.formBuilder.array([this.formBuilder.group({
        titulo: ['', [Validators.required]],
        formula: ['', [Validators.required]]
      })]),
      imagenes: this.formBuilder.array(
        [Validators.required]
      ),
      nombre: ['', [Validators.required]],
      referencia: this.formBuilder.group({
        titulo: ['', [Validators.required]],
        link: ['', [Validators.required]]
      })
    });
  }

  agregarImagen = (imagen?: string, ) => {
    (<FormArray>this.formGroup.controls['imagenes']).push(
      new FormControl(imagen, Validators.required)
    );
  }

  agregarFormula = (titulo?: string, formula?: string) => {
    (<FormArray>this.formGroup.controls['formulas']).push(
      this.formBuilder.group({
        titulo: [titulo, [Validators.required]],
        formula: [formula, [Validators.required]]
      })
    );
  }

  borrarFormula = ($event, index) => { 
    (<FormArray>this.formGroup.controls['formulas']).removeAt(index);
  }
  borrarImagen = ($event, index) => { 
      (<FormArray>this.formGroup.controls['imagenes']).removeAt(index); 
  }


  ngOnInit() {
  }

}
