import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, Subscription } from 'rxjs';

export type Orientation = 'portrait' | 'landscape';

@Injectable({
  providedIn: 'root'
})
export class ScreenOrientationService  implements OnDestroy {

  private orientationSubject = new BehaviorSubject<Orientation>(this.getCurrentOrientation());
  orientation$ = this.orientationSubject.asObservable();

  private resizeSubscription!: Subscription;

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      this.resizeSubscription = fromEvent(window, 'resize').subscribe(() => {
        const newOrientation = this.getCurrentOrientation();
        this.ngZone.run(() => {
          this.orientationSubject.next(newOrientation);
        });
      });
    });
  }

  private getCurrentOrientation(): Orientation {
    if (window.matchMedia('(orientation: portrait)').matches) {
      return 'portrait';
    }
    return 'landscape';
  }

  ngOnDestroy(): void {
    this.resizeSubscription?.unsubscribe();
  }
}
