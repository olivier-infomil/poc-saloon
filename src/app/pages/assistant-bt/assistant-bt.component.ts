import { Component, inject, OnInit } from '@angular/core';
import { BackHpComponent } from "../../shared/components/back-hp/back-hp.component";
import { OrientationSplashComponent } from "../../shared/components/orientation-splash/orientation-splash.component";
import { Orientation, ScreenOrientationService } from '../../shared/services/screen-orientation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-assistant-bt',
  standalone: true,
  imports: [BackHpComponent, OrientationSplashComponent],
  templateUrl: './assistant-bt.component.html',
  styleUrl: './assistant-bt.component.scss'
})
export class AssistantBtComponent implements OnInit{

  private orientationService = inject(ScreenOrientationService);
  private subscription!: Subscription;

  public orientation: Orientation = 'landscape';

  ngOnInit(): void {
    this.subscription = this.orientationService.orientation$.subscribe(o => {
      this.orientation = o;
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
