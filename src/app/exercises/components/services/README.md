# Services & InjectionToken

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

Además crearemos una interfaz del servicio para poder desacoplar el componente de la implementación concreta del servicio.

## Requisitos

### Servicios

- Crea un servicio en la carpeta `exercise`.
- Inyéctalo en el componente mediante el constructor:

```typescript
constructor(private readonly counter: CalculatorService) {}
```

- Completa el componente para que use el servicio.

### Interfaces and DI

- Crea una interfaz que defina los métodos del servicio:

```typescript
interface Calculator {
  add(x: number, y: number): number
}
```

- Añade el siguiente código para poder crear un `InjectableToken` a partir de la interfaz:

```typescript
const CalculatorInjectionToken = new InjectionToken<Calculator>('Calculator')
```

- Modifica el servicio para que implemente la interfaz definida:

```typescript
class MyCalculatorService implements Calculator {...}
```

- En el archivo `app.config.ts` registra el servicio para que sea accesible en toda la aplicación:

```typescript
const appConfig: ApplicationConfig = {
  providers: [
    ...
    {
      provide: CalculatorInjectionToken,
      useClass: MyCalculatorService,
    },
    ...
  ],
}
```

- Por último, inyecta el servicio en el componente:

```typescript
constructor(@Inject(CalculatorInjectionToken) private readonly calculator: Calculator) {}
```

De esta forma hemos conseguido que el componente no dependa de `MyCalculatorService` y si fuera necesario podríamos cambiar esa pieza por otra sin afectar al componente. Siempre que el nuevo servicio cumpla con el contrato definido en la interfaz `Calculator`.
