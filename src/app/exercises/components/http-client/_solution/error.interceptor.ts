import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest, HttpStatusCode } from '@angular/common/http'
import { catchError, Observable, of } from 'rxjs'

export function errorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  if (req.url.startsWith('assets')) {
    return next(req)
  }

  return next(req).pipe(
    catchError(error => {
      if (error instanceof HttpErrorResponse) {
        switch (error.status) {
          case HttpStatusCode.NotFound:
            alert('No encontrado')
            break
          default:
            alert('Error de servidor')
        }
      }

      return of(error)
    }),
  )
}
