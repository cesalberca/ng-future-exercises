import { Component } from '@angular/core'
import { RouterOutlet, RouterLink } from '@angular/router'
import { NavigatorComponent } from './dashboard/delivery/components/navigator/navigator.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavigatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-future-exercises'
}
