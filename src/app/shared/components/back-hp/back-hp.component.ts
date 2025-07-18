import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-hp',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './back-hp.component.html',
  styleUrl: './back-hp.component.scss'
})
export class BackHpComponent {
  public show: boolean = false;
}
