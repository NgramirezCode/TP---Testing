class Cuenta {
  #saldo;

  constructor(saldoInicial = 0) {
    // Si el saldo inicial es mayor a 0, lo asigna; de lo contrario, lo inicializa en 0.
    this.#saldo = saldoInicial > 0 ? saldoInicial : 0;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
    }
    // El return se ejecuta una sola vez.
    return this.#saldo;
  }

  obtenerSaldo() {
    return this.#saldo;
  }
}

exports.cuentaBancaria = Cuenta;
