import { Component } from '@angular/core';
import { NavigationHpComponent } from "../../shared/components/navigation-hp/navigation-hp.component";
import { BackHpComponent } from "../../shared/components/back-hp/back-hp.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationHpComponent, BackHpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
