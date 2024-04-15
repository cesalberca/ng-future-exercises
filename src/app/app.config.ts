import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { provideMarkdown } from 'ngx-markdown'
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'
import { baseUrlInterceptor } from './exercises/components/http-client/_solution/base-url.interceptor'
import { errorInterceptor } from './exercises/components/http-client/_solution/error.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([baseUrlInterceptor, errorInterceptor])),
    provideMarkdown({ loader: HttpClient }),
  ],
}
