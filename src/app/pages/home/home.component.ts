import { Component } from '@angular/core';
import { NavigationHpComponent } from "../../shared/components/navigation-hp/navigation-hp.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationHpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
