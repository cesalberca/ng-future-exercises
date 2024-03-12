import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [],
  template: ` <p>if works!</p> `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IfComponent {}
