# Services

## Introducción

El objetivo de este ejercicio es crear y utilizar un servicio.
Los servicios son piezas de código reusable que se pueden inyectar.

Ejemplo:

```typescript
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  add(x: number, y: number) {
    return x + y
  }
}
```

## Requisitos

- Crea un servicio en la carpeta `exercise`.
- Inyéctalo en el componente mediante el constructor:

```typescript
constructor(private readonly counter: CalculatorService) {}
```

- Completa el componente para que use el servicio.
