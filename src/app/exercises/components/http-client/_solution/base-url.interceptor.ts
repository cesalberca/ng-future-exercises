import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'

export function baseUrlInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  if (req.url.startsWith('assets')) {
    return next(req)
  }

  return next(
    req.clone({
      url: 'https://jsonplaceholder.typicode.com/' + req.url,
    }),
  )
}
