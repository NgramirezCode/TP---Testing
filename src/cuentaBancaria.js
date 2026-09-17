class Cuenta {
  #saldo;

  constructor(saldoInicial = 0) {
    this.#saldo = saldoInicial;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      return this.#saldo;
    } else {
      console.log("Monto no aceptado");
      return this.#saldo;
    }
  }

  obtenerSaldo() {
    return this.#saldo;
  }
}

exports.cuentaBancaria = Cuenta;
