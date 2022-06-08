import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Persona } from 'src/app/model/persona_m';
// import { Persona } from 'src/app/model/persona_m';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //  arrayPersonas: FormGroup[] = [];
  @Input() usuario:Persona;
  @Input() i:number;
  @Input() formularioPersona:FormGroup[];
  

  constructor() { }

  ngOnInit(): void {
  }
  // public getArrayPersonas(): FormGroup[] {

  //   return this.arrayPersonas;
  // }
}
