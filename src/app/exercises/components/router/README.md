# Router

## Introducción

- El objetivo de este ejercicio es hacer uso del router de Angular.
- Usaremos tanto navegación por link, como programática.
- Crearemos una página para rutas no encontradas.

Nota: haremos uso de rutas anidadas con el objetivo de quedarnos siempre en la pagina del ejercicio `router`.

## Requisitos

### Navegación por link

- En el componente `router` de la carpeta `exercise` importa los siguientes módulos: `RouterOutlet`, `RouterLink` y `RouterLinkActive`.
- Crea un nuevo componente para poder redirigir del componente `router` a el.
- Añade en el fichero `router.ts`, en los children de "exercise", un nuevo path para el componente que acabas de crear.
- En el html del componente `router` añade un link para redirigir a este nuevo componente y el componente `<router-outlet></router-outlet>` (donde se renderizará el componente).

```html
<a routerLink="solution/page">Solution Page Link</a>
```

### Navegación programática

- En el componente `router` añade un constructor que reciba el router para poder usarlo de forma programática.

```typescript
constructor(private readonly router: Router) {}
```

- Añade un método en la clase que use el router para redirigir a la página creada anteriormente.

### Página no encontrada

- Crea un nuevo componente que servirá para renderizar un mensaje por pantalla cuando un path no se encuentre (dentro del subpath de /router/exercise).
- En el fichero `router.ts` añade el `path: '**'` con el componente que acabas de crear.
- Añade un nuevo link con un path que no exista.

### Query Params

- Añade 1 link nuevo que contenga un query params:

```html
<a routerLink="solution/page" [queryParams]="{ title: 'Title 1'}">Solution Page with query param: title 1</a>
```

- En el componente al que vas a redirigir añade como campos el siguiente código con tal de escuchar cambios sobre el queryParam title

```typescript
queryParams = toSignal(this.route.queryParams, { initialValue: { title: '' } })
title = computed(() => this.queryParams().title)
```

- Muestra el valor del parámetro en pantalla a través del html.

### Route Params

- Crea un nuevo componente para poder redirigirte a el.
- En el fichero `router.ts` añade el `path: 'page/:id'` con el componente que acabas de crear.
- En el componente al que vas a redirigir añade como campos el siguiente código con tal de escuchar cambios sobre route param:

```typescript
routeParams = toSignal(this.route.params, { initialValue: { id: '' } })
id = computed(() => this.routeParams().id)
```

- Muestra el valor del parámetro en pantalla a través del html.
- En el componente padre añade un nuevo link que contenga el route param:

```html
<a [routerLink]="['solution/page', '1']">Solution Page with route param id: 1</a>
```
