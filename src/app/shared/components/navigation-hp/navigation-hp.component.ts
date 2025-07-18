import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


export interface navItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-navigation-hp',
  standalone: true,
  imports: [],
  templateUrl: './navigation-hp.component.html',
  styleUrl: './navigation-hp.component.scss'
})
export class NavigationHpComponent {

  private router = inject(Router)

  public navItems:navItem[] = [
    {
      title: "Abaco mobile",
      route: "abaco-mobile"
    },
    {
      title: "Scapmarée",
      route: "scapmaree"
    },
    {
      title: "Scafel Mobifresh",
      route: "scafel-mobifresh"
    },
    {
      title: "Sequoia Labo",
      route: "sequoia-labo"
    },
    {
      title: "Accueil Fidélité",
      route: "accueil-fidelite"
    },
  ];
  
  routeTo(route: string): void {
    this.router.navigateByUrl(route);
  }
}
