import { Component } from '@angular/core'

@Component({
  selector: 'app-hello-world',
  standalone: true,
  template: `<h1 class="hworld">Hello world!</h1>`,
  styles: [
    `
      .hworld {
        color: var(--primary-color);
      }
    `,
  ],
})
export class HelloWorldComponent {}
