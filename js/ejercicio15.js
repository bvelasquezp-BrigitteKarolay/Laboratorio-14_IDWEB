// EJERCICIO 15 - POLIMORFISMO CON USUARIOS

// SE REUTILIZA LA CLASES DE USUARIO, CLIENTE Y ADMINISTRADOR DEL EJERCICIO ANTERIOR
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
  mostrarInfo() {
    return `Usuario: ${this.nombre} (${this.email})`;
  }
}

class Cliente extends Usuario {
  constructor(nombre, email, nivelFidelidad) {
    super(nombre, email);
    this.nivelFidelidad = nivelFidelidad;
  }
  mostrarInfo() {
    return `Cliente: ${this.nombre} - Nivel de fidelidad: ${this.nivelFidelidad}`;
  }
}

class Administrador extends Usuario {
  constructor(nombre, email, permisos) {
    super(nombre, email);
    this.permisos = permisos;
  }
  mostrarInfo() {
    return `Administrador: ${this.nombre} - Permisos: ${this.permisos.join(", ")}`;
  }
}

// SE CREA UNA LISTA CON DIFERENTES TIPOS DE USUARIOS
const usuarios = [
  new Cliente("Brigitte", "bvelasquez@unsa.edu.pe", 5),
  new Administrador("Marco", "maedo@unsa.edu.pe", ["crear", "editar"]),
  new Cliente("Luis", "luis@unsa.edu.pe", 3)
];

// SE USA POLIMORFISMO PARA MOSTRAR INFORMACION
usuarios.forEach(usuario => {
  console.log(usuario.mostrarInfo());
});
