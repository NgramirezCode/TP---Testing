const { cuentaBancaria } = require("../src/cuentaBancaria");
describe("Cuenta Bancaria", () => {
  test("Depositar dinero", () => {
    const cuenta = new cuentaBancaria(100);
    cuenta.depositar(50);
    expect(cuenta.obtenerSaldo()).toBe(150);
  });

  test("Deposito cero", () => {
    const cuenta = new cuentaBancaria(100);
    cuenta.depositar(0);
    expect(cuenta.obtenerSaldo()).toBe(100);
  });

  test("Deposito negativo", () => {
    const cuenta = new cuentaBancaria(100);
    cuenta.depositar(-50);
    expect(cuenta.obtenerSaldo()).toBe(100);
  });

  test("Ingreso de otro dato", () => {
    const cuenta = new cuentaBancaria(100);
    cuenta.depositar("-50");
    expect(cuenta.obtenerSaldo()).toBe(100);
  });

  test("Deposito sin argumento", () => {
    const cuenta = new cuentaBancaria(100);
    cuenta.depositar();
    expect(cuenta.obtenerSaldo()).toBe(100);
  });
});
