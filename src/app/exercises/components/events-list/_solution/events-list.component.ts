import { Component } from '@angular/core'
import { EventSolutionComponent } from '../../event/_solution/event.component'

@Component({
  selector: 'app-events-list-solution',
  standalone: true,
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css',
  imports: [EventSolutionComponent],
})
export class EventsListSolutionComponent {
  events: string[] = ['Meditar', 'Journaling', 'Beber 2L de agua', 'Hacer 10.000 pasos']
}
