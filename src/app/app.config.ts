import { ApplicationConfig } from '@angular/core'
import { provideRouter, withComponentInputBinding } from '@angular/router'
import { routes } from './app.routes'
import { provideMarkdown } from 'ngx-markdown'
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http'
import { CounterInjectionToken } from './exercises/components/services/_solution/services/counter'
import { MyCounterService } from './exercises/components/services/_solution/services/my-counter.service'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch()),
    provideMarkdown({ loader: HttpClient }),
    {
      provide: CounterInjectionToken,
      useClass: MyCounterService,
    },
  ],
}
