// EJERCICIO 16 - HERENCIA DE EMPLEADO, PROGRAMADOR Y PROGRAMADORSENIOR

// CLASE BASE EMPLEADO
class Empleado {
  constructor(nombre, sueldoBase) {
    this.nombre = nombre;
    this.sueldoBase = sueldoBase;
  }

  calcularSueldo() {
    return this.sueldoBase;
  }
}

// CLASE PROGRAMADOR HEREDA DE EMPLEADO
class Programador extends Empleado {
  constructor(nombre, sueldoBase, lenguaje) {
    super(nombre, sueldoBase);
    this.lenguaje = lenguaje;
  }

  calcularSueldo() {
    return this.sueldoBase * 1.10;
  }
}

// CLASE PROGRAMADORSENIOR HEREDA DE PROGRAMADOR
class ProgramadorSenior extends Programador {
  constructor(nombre, sueldoBase, lenguaje) {
    super(nombre, sueldoBase, lenguaje);
  }

  calcularSueldo() {
    return this.sueldoBase * 1.25;
  }
}

// PRUEBAS
const empleado1 = new Empleado("Brigitte", 2000);
const programador1 = new Programador("Carlos", 2500, "JavaScript");
const senior1 = new ProgramadorSenior("Ana", 3000, "Python");

console.log("Empleado:", empleado1.nombre, "Sueldo:", empleado1.calcularSueldo());
console.log("Programador:", programador1.nombre, "Sueldo:", programador1.calcularSueldo());
console.log("Programador Senior:", senior1.nombre, "Sueldo:", senior1.calcularSueldo());
