import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core'
import { marked } from 'marked'

@Component({
  selector: 'app-markdown',
  standalone: true,
  template: `<div class="markdown" [innerHTML]="getParsedText(this.text())"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './markdown.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class MarkdownComponent {
  text = input.required<string>()
  md = marked.setOptions({})
  getParsedText = (text: string) => {
    return this.md.parse(text)
  }
}
