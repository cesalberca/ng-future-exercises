# HTTP Client

## Introducción

El objetivo de este ejercicio es hacer uso del http-client de Angular. Haremos eso del siguiente [API](https://jsonplaceholder.typicode.com/guide/).

## Requisitos

- Usar el HTTP Client para hacer una petición `get` al siguiente API: `https://jsonplaceholder.typicode.com/posts`. Pinta la propiedad `title` en una lista.
- Usar el HTTP Client para hacer una petición `post` al siguiente API: `https://jsonplaceholder.typicode.com/posts`. Pinta el resultado por pantalla.
- Añadir un interceptor para concatenar como prefijo a la url `https://jsonplaceholder.typicode.com/` de tal manera que con el httpClient podamos hacer llamadas de la siguiente manera: `httpClient.get('posts')'`
- Añadir otro interceptor que cuando haya un error haga un alert de "Error de servidor". Para forzarlo, añade un botón que llame al siguiente API que no existe: `https://jsonplaceholder.typicode.com/non_existent_url`
- Tipa todas las respuestas
- Cambiar en el `app.config` los interceptores que haya definidos en `provideHttpClient(withInterceptors([<INTERCEPTOR_1, INTERCEPTOR_2])),`
