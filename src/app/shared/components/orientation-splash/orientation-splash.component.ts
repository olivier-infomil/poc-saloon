import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
// import { ScreenOrientationService } from '../../services/screen-orientation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orientation-splash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orientation-splash.component.html',
  styleUrl: './orientation-splash.component.scss'
})
export class OrientationSplashComponent implements OnInit {

  ngOnInit(): void {
    // this.showMe$ = this.orientationService.showSplash$;
  }
}
