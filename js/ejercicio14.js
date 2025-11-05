// EJERCICIO 14 - HERENCIA DE USUARIO, CLIENTE Y ADMINISTRADOR

// CLASE BASE USUARIO
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  // METODO PARA MOSTRAR INFORMACION
  mostrarInfo() {
    return `Nombre: ${this.nombre} | Email: ${this.email}`;
  }
}

// CLASE CLIENTE HEREDA DE USUARIO
class Cliente extends Usuario {
  constructor(nombre, email, nivelFidelidad) {
    super(nombre, email); 
    this.nivelFidelidad = nivelFidelidad; 
  }

  // METODO SOBRESCRUITO
  mostrarInfo() {
    return `Cliente: ${this.nombre} (${this.email}) - Nivel de fidelidad: ${this.nivelFidelidad}`;
  }
}

// CLASE ADMINISTRADOR HEREDA DE USUARIO
class Administrador extends Usuario {
  constructor(nombre, email, permisos) {
    super(nombre, email);
    this.permisos = permisos; 
  }

  // METODO SOBRESCRITO
  mostrarInfo() {
    return `Administrador: ${this.nombre} (${this.email}) - Permisos: ${this.permisos.join(", ")}`;
  }
}

// PRUEBAS
const cliente1 = new Cliente("Brigitte", "brigitte@unsa.edu.pe", 5);
const admin1 = new Administrador("Marco", "maedo@unsa.edu.pe", ["crear", "editar", "eliminar"]);

console.log(cliente1.mostrarInfo());
console.log(admin1.mostrarInfo());
