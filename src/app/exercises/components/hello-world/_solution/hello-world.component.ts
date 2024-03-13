import { Component } from '@angular/core'

@Component({
  selector: 'app-hello-world',
  styles: [
    `
      .title {
        color: var(--primary-color);
      }
    `,
  ],
  template: ` <h1 class="title">Hello world</h1> `,
  standalone: true,
  imports: [],
})
export class HelloWorldPage {}
