# Content Projection (ng-content)

## Introducción

La proyección de contenido es un patrón en el que se inserta (proyecta) el contenido que se quiere utilizar dentro de otro componente. Por ejemplo, puedes tener un componente `Card` que acepte contenido proporcionado por otro componente.

#### Single-slot content projection

La manera más básica de proyectar contenido es mediante el "single-slot content projection". Se basa en poder proyectar únicamente un componente.

Para usar el "single-slot content projection":

1. Se debe crear un componente que use el elemento `<ng-content>`
2. Cuando se use el componente se deberá pasar como "hijo" el contenido que se quiera proyectar.

```html
<app-component-with-ng-content>
  <p>Contenido a proyectar</p>
</app-component-with-ng-content>
```

## Requisitos

- Crea un componente que tenga un elemento `<ng-content>`
- Úsalo 2 veces en el componente `exercise.component.ts` para propagar contenido distinto.
