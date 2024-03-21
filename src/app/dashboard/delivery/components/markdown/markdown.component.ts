import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core'
import { MarkdownModule } from 'ngx-markdown'

@Component({
  selector: 'app-markdown',
  standalone: true,
  template: `<markdown class="markdown" [src]="src()"> </markdown>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './markdown.component.css',
  encapsulation: ViewEncapsulation.None,
  imports: [MarkdownModule],
})
export class MdComponent {
  src = input.required<string>()
}
