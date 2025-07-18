import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { BackHpComponent } from "../../shared/components/back-hp/back-hp.component";
import { Subscription } from 'rxjs';
import { Orientation, ScreenOrientationService } from '../../shared/services/screen-orientation.service';
import { OrientationSplashComponent } from "../../shared/components/orientation-splash/orientation-splash.component";

@Component({
  selector: 'app-accueil-fidelite',
  standalone: true,
  imports: [BackHpComponent, OrientationSplashComponent],
  templateUrl: './accueil-fidelite.component.html',
  styleUrl: './accueil-fidelite.component.scss'
})
export class AccueilFideliteComponent implements OnInit, OnDestroy {

  private orientationService = inject(ScreenOrientationService);
  private subscription!: Subscription;

  public orientation: Orientation = 'portrait';
  public currentImg: number = 1;

  ngOnInit(): void {
    this.subscription = this.orientationService.orientation$.subscribe(o => {
      this.orientation = o;
    });
  }

  nextImg(): void {
    this.currentImg = this.currentImg + 1;
  }

  previousImg(): void {
    if(this.currentImg > 1){
      this.currentImg = this.currentImg - 1;
    }

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
