import { Component, KeyValueDiffers, NgModule, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Persona } from 'src/app/model/persona_m';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formularioPersona;
  public personas: Array<Persona>
  arrayPersonas: FormGroup[] = [];
  modif: boolean = false;
  i: any = 0;

  constructor(fb: FormBuilder) {
    this.formularioPersona = fb.group({
      nombre: [''],
      apellidos: [''],
      edad: [''],
      DNI: [''],
      cumple: [''],
      color: [''],
      sexo: ['']
    });

  }



  ngOnInit(): void {
  }
  public getArrayPersonas(): FormGroup[] {

    return this.arrayPersonas;
  }

  RegistrarPersonas(usuario: FormGroup) {
    if (this.modif == false){
      this.arrayPersonas.push(usuario.value);
    }else{
      this.arrayPersonas[this.i] = usuario.value;
    }
    this.formularioPersona.reset();
  }

  Eliminar(i: number) {
    this.getArrayPersonas().splice(i, 1);
  }

  onKeyUp(i: number, usuario: FormGroup): void {
    
    this.formularioPersona.setValue(usuario)
    this.modif = true
    this.i = i
    
  }

  mostrarvalores() {
    for (let i = 0; i < this.arrayPersonas.length; i++) {
      console.log(this.arrayPersonas[i]);
    }

  }
}
