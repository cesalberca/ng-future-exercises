# Signals (writable signals)

## Introducción

Un signal es un wrapper alrededor de un valor que notifica los consumidores interesados cuando el valor cambia. Los signals pueden contener cualquier tipo de valor, desde primitivos hasta estructuras de datos.

Para leer el valor de un signal llamas al getter, lo que permite a Angular trackear donde se usa ese signal.

Las signals puede ser _writable_ o _read-only_.

### Writable Signals

Las _writable signals_ proveen una API para actualizar su valor. Y tienen el tipo `WritableSignal`.

```typescript
// Inicializar una signal con su valor inicial:
const count: WritableSignal<number> = signal(0)

// Leer el valor de la signal:
count()

// Cambiar el valor de la signal:
count.set(3)

// Modificar el valor de la signal a partir del valor previo:
count.update(value => value + 1)
```

## Requisitos

- Completa el componente de la carpeta `exercise` para que tenga un signal como estado.
- Usa la API de writable signals para leer el valor y modificarlo con los 2 métodos disponibles.
