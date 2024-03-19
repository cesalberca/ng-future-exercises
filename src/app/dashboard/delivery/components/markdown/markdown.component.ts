import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { marked } from 'marked'

@Component({
  selector: 'app-markdown',
  standalone: true,
  template: `<p [innerHTML]="getParsedText(this.text())"></p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownComponent {
  text = input.required<string>()
  md = marked.setOptions({})
  getParsedText = (text: string) => {
    return this.md.parse(text)
  }
}
