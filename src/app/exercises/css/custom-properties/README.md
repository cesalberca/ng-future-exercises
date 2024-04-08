# Custom properties (Variables CSS)

## Introducción

Las custom properties o variables css són un són una característica de CSS que permite definir variables y reutilizarlas en el documento CSS. Estas variables pueden almacenar valores como colores, tamaños, entre otros.

Las variables CSS se definen utilizando el prefijo `--`, seguido del nombre y el valor deseado. Por ejemplo:

```css
:root {
  --color-primary: blue;
  --color-secondary: grey;

  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 20px;
}
```

Hemos establecido las variables en la pseudo-clase `:root`, la cual hace referencia al elemento raíz del documento, es decir, al elemento `<html>`. De esta forma hemos creado variables globales que pueden ser utilizadas en cualquier parte del documento CSS mediante la función `var()`. Por ejemplo:

```css
.element {
  color: var(--color-primary);
  background: var(--color-secondary);
  padding: var(--space-xs);
}
```

## Requisitos

- Añade variables css en la pseudo-clase `:host` del fichero `custom-properties.component.css` y utilízalas para estilar los elementos del fichero `custom-properties.component.html`
