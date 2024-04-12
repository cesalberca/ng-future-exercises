# Output

## Introducción

En Angular, además de enviar información de un componente padre a un componente hijo (input) también se puede enviar información del hijo al padre a través de eventos.

```typescript
// componente hijo
onNameChange = output<string>(); // nueva versión: v17.3
@Output() onNameChange = new EventEmitter<string>(); // versiones previas

//método que se usa en el componente hijo y lanza el evento:
updateName(value: string) {
  this.onNameChange.emit(value);
}
```

```html
<!-- template del componente padre -->
<app-my-comp (onNameChange)="handleNameChange($event)" />
```

Angular provee la variable `$event`, que contiene la información emitida por el hijo.

## Requisitos

- Completa los componentes de la carpeta `exercise` para que el componente padre reciba un evento del componente hijo.
