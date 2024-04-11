import { Component } from '@angular/core'

@Component({
  selector: 'app-hello-world',
  standalone: true,
  template: `<h1 class="title">Hello world</h1>`,
  styles: `
    .title {
      color: var(--primary-color);
    }
  `,
})
export class HelloWorldComponent {}
