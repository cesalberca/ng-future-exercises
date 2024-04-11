import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  template: ` <p>foo works!</p> `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooComponent {}
