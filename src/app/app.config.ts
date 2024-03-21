import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { provideMarkdown } from 'ngx-markdown'
import { HttpClient, provideHttpClient } from '@angular/common/http'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideMarkdown({ loader: HttpClient })],
}
