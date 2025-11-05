// EJERCICIO 13 - HERENCIA DE CLASES

// CLASE BASE FIGURA
class Figura {
  area() {
    return 0;
  }

  perimetro() {
    return 0;
  }
}

// SUBCLASE CUADRADO
class Cuadrado extends Figura {
  constructor(lado) {
    super(); 
    this.lado = lado;
  }

  area() {
    return Math.pow(this.lado, 2);
  }

  perimetro() {
    return 4 * this.lado;
  }
}

// SUBCLASE TRIANGULO
class Triangulo extends Figura {
  constructor(base, altura, lado1, lado2, lado3) {
    super();
    this.base = base;
    this.altura = altura;
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  area() {
    return (this.base * this.altura) / 2;
  }

  perimetro() {
    return this.lado1 + this.lado2 + this.lado3;
  }
}

// PRUEBAS
const cuadrado = new Cuadrado(5);
console.log("AREA DEL CUADRADO:", cuadrado.area());
console.log("PERIMETRO DEL CUADRADO:", cuadrado.perimetro());

const triangulo = new Triangulo(6, 4, 5, 5, 6);
console.log("AREA DEL TRIANGULO:", triangulo.area());
console.log("PERIMETRO DEL TRIANGULO:", triangulo.perimetro());
