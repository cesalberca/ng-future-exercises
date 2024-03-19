import { Component, input } from '@angular/core'

@Component({
  selector: 'app-event-solution',
  styleUrl: './event.component.css',
  templateUrl: './event.component.html',
  standalone: true,
  imports: [],
})
export class EventSolutionComponent {
  event = input.required<string>()
}
