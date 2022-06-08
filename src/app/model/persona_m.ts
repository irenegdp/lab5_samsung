export class Persona {
    name: string;
    apellidos: string;
    edad: number;
    DNI: string;
    cumple: Date;
    color: string;
    sexo: string;
  
    constructor() {
      this.name = '';
      this.apellidos = '';
      this.edad = 0;
      this.DNI = '';
      this.cumple = new Date();
      this.color = '';
      this.sexo = '';
    }
  }