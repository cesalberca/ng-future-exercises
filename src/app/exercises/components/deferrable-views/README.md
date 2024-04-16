# Deferrable views

## Introducción

Deferrable view, también conocidas como bloques `@defer`, son una potente herramienta que puede utilizarse para reducir el tamaño inicial del _bundle_ de la aplicación o aplazar componentes pesados que puede que no se carguen nunca hasta más adelante.

Los bloques `@defer` tienen algunos sub bloques que te permiten gestionar diferentes etapas del proceso de carga deferida: `@loading`, `@placeholder`, `@hover`.

Además, hay múltiples _triggers_ que pueden desencadenar la carga del bloque: on idle, on hover, on interaction, etc.

```html
@defer {
<large-component />
} @placeholder (minimum 500ms) {
<p>Placeholder content</p>
}
```

## Requisitos

- Completa el componente de la carpeta `exercise` para que cargue el componente `large-component` usando `@defer`.
