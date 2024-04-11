# Multi-Slot Content Projection (ng-content)

## Introducción

Un componente puede tener multiples slots. Cada slot puede especificar un selector para determinar que contenido va en cada slot.

1. Se debe crear un componente que use el elemento `<ng-content>`.
2. Añade un atributo `select` en el elemento `ng-content`. Ejemplo: `select="[content]"`.
3. Cada elemento `ng-content` debe tener un select diferente. Además, podría haber un `ng-content` sin selector que recogería todo el contenido que no tenga ningún selector.
4. Cuando se use el componente se deberá pasar como "hijo" el contenido que se quiera proyectar y añadir el selector.

```html
<div>
  <ng-content></ng-content>
  <ng-content select="[content-1]"></ng-content>
  <ng-content select="[content-2]"></ng-content>
</div>
```

```html
<app-component-with-ng-content>
  <p content-2>Contenido a proyectar</p>
  <p>Contenido proyectado por defecto 1</p>
  <p content-1>Contenido a proyectar</p>
  <p>Contenido proyectado por defecto 2</p>
</app-component-with-ng-content>
```

## Requisitos

- En la carpeta `exercise` completa el componente `component-with-multi-ng-content` para que tenga el html que quiera que sea común cada vez que utilices el componente y añade varios elementos `ng-content` con sus respectivos selectores donde quieras proyectar contenido extra.
- Úsalo en el componente `content-projection-multi.component.ts` de la carpeta `exercise`.
- Puedes comprobar que los contenidos se proyectaran en su slot (sin importar el orden que especifiques en el componente `content-projection-multi`).
