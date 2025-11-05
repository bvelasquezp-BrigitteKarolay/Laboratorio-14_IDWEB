// EJERCICIO 17 - ENCAPSULACION Y POLIMORFISMO CON CUENTAS

// CLASE BASE CUENTA
class Cuenta {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
    }
  }

  retirar(monto) {
    if (monto > 0 && monto <= this.#saldo) {
      this.#saldo -= monto;
    } else {
      console.log("Fondos insuficientes");
    }
  }

  get saldo() {
    return this.#saldo;
  }

  transferir(monto, cuentaDestino) {
    if (monto > 0 && monto <= this.#saldo) {
      this.retirar(monto);
      cuentaDestino.depositar(monto);
      console.log("Transferencia realizada con exito");
    } else {
      console.log("Transferencia no valida");
    }
  }
}

// SUBCLASE CUENTA AHORRO
class CuentaAhorro extends Cuenta {
  retirar(monto) {
    if (monto > 0 && monto <= this.saldo) {
      super.retirar(monto);
    } else {
      console.log("No puedes retirar mas de tu saldo disponible");
    }
  }
}

// SUBCLASE CUENTA CORRIENTE
class CuentaCorriente extends Cuenta {
  constructor(saldoInicial, limiteSobregiro) {
    super(saldoInicial);
    this.limiteSobregiro = limiteSobregiro;
  }

  retirar(monto) {
    if (monto > 0 && monto <= this.saldo + this.limiteSobregiro) {
      super.retirar(monto);
    } else {
      console.log("Limite de sobregiro excedido");
    }
  }
}

// PRUEBAS
const ahorro = new CuentaAhorro(1000);
const corriente = new CuentaCorriente(500, 200);

ahorro.transferir(200, corriente);
console.log("Saldo Ahorro:", ahorro.saldo);
console.log("Saldo Corriente:", corriente.saldo);
