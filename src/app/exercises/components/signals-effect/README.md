# Signals Effect

## Introducción

Las Signals son útiles porque notifican a los consumidores interesados cuando cambian. Un `effect` es una operación que se ejecuta cada vez que una o más signals cambian de valor. Puede crear un effect con la función effect:

```typescript
effect(() => {
  console.log(`The current count is: ${count()}`)
})
```

Los effects rara vez son necesarios en la mayor parte del código de las aplicaciones, pero pueden ser útiles en circunstancias específicas. Algunos casos de uso podrían ser:

- Registrar los datos que se muestran y cuándo cambian, ya sea para análisis o como herramienta de depuración.
- Mantener los datos sincronizados con `window.localStorage`.
- Añadir un comportamiento DOM personalizado que no puede expresarse con la `template syntax`.
- Realizar un renderizado personalizado a un <canvas>, biblioteca de gráficos u otra biblioteca de interfaz de usuario de terceros.

## Requisitos

- Completa el componente de la carpeta `exercise` para utilizar un effect.
