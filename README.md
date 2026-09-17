# TP - REFACTORIZACIÓN

## Paso 1 - Identificar Code Smells

1. Código Duplicado: En el método depositar(monto), la instrucción return this.#saldo; se repite exactamente igual tanto en el bloque if como en el else.
2. Falta de Validación: El constructor acepta saldoInicial y lo asigna directamente sin validar.
3. Lógica de Presentación: La clase Cuenta imprime mensajes por consola (console.log("Monto no aceptado")). El Modelo/Dominio no debe interactuar con la interfaz de usuario o consola; solo debe manejar datos y lanzar errores.

## Paso 2 – Documentar

1. Code Smell: Código Duplicado
   Ubicación: TestingCuenta.js (Método depositar de la clase Cuenta).
   Problema: El retorno del saldo se ejecuta dos veces innecesariamente.
2. Code Smell: Falta de Validación (Estado Corrupto)
   Ubicación: TestingCuenta.js (Constructor de la clase Cuenta).
   Problema: Se permite instanciar cuentas con saldos iniciales negativos.
3. Code Smell: Efecto Secundario (Console.log en el Dominio)
   Ubicación: TestingCuenta.js (Método depositar).
   Problema: La clase mezcla reglas de negocio con I/O.
