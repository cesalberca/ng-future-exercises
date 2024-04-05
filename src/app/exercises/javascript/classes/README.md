# Clases

## Introducción

JavaScript tiene de forma nativa clases. Estas permiten crear métodos y campos. Hacen uso del constructor y permiten herencia.

## Requisitos

1. Definir una clase llamada Animal.
   1. La clase debe tener un campo privado llamado nombre.
   2. Debe tener un constructor que acepte un parámetro nombre para inicializar el campo nombre.
   3. Debe tener un método público llamado getName() que devuelve el nombre del animal.
   4. Debe tener un método público llamado makeSound() que devuelve un sonido genérico que hace el animal.
2. Clase Perro (hereda de Animal):
   1. Definir una clase llamada Perro que herede de Animal.
   2. La clase Perro debe tener un campo privado adicional llamado raza.
   3. Debe tener un constructor que acepte dos parámetros: nombre y raza, y llame al constructor de la clase padre para inicializar el campo nombre.
   4. Debe tener un método público llamado getRaza() que devuelve la raza del perro.
   5. Debe sobrescribir el método makeSound() para que devuelva un ladrido específico de perro.
3. Instancias
   1. Crear una instancia de la clase Animal y probar los métodos getName() y makeSound().
   2. Crear una instancia de la clase Perro y probar los métodos getName(), getRaza() y makeSound().

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
