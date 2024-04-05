# TypeScript

## Introducción

TypeScript es superset de JavaScript que incluye tipado estático.

## Requisitos

1. Crea un genérico para la siguiente abstracción:

   ```
   function identity1(arg: number): number {
     return arg
   }

   function identity2(arg: string): string {
     return arg
   }

   function identity3(arg: boolean): boolean {
     return arg
   }
   ```

2. Crea un genérico para la siguiente abstracción:

   ```
   class Generic {
     foo?: number
     bar(x: number): number {
       return x
     }
   }

   class Generic2 {
     foo?: string
     bar(x: string): string {
       return x
     }
   }
   ```

3. Sobre el ejercicio anterior dale un valor por defecto.
4. Sobre el ejercicio anterior añade un segundo tipo al genérico para que el método devuelva otro tipo distinto

https://www.typescriptlang.org/
