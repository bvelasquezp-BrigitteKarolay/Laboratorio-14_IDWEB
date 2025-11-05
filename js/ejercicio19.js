// EJERCICIO 19 - POLIMORFISMO CON NOTIFICACIONES

class Notificacion {
  enviar() {
    console.log("Enviando notificacion generica...");
  }
}

class Email extends Notificacion {
  enviar() {
    console.log("Enviando notificacion por correo electronico");
  }
}

class SMS extends Notificacion {
  enviar() {
    console.log("Enviando notificacion por mensaje de texto");
  }
}

class Push extends Notificacion {
  enviar() {
    console.log("Enviando notificacion push al dispositivo movil");
  }
}

// FUNCION QUE PROCESA UNA LISTA DE NOTIFICACIONES
function procesarNotificaciones(lista) {
  lista.forEach(notificacion => notificacion.enviar());
}

// PRUEBAS
const notificaciones = [new Email(), new SMS(), new Push()];
procesarNotificaciones(notificaciones);
