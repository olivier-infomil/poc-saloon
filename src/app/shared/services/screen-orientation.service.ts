import { Injectable, NgZone, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export type Orientation = 'portrait' | 'landscape';

@Injectable({
  providedIn: 'root'
})
export class ScreenOrientationService implements OnDestroy {

  private orientationSubject = new BehaviorSubject<Orientation>('landscape');
  orientation$ = this.orientationSubject.asObservable();

  private resizeSubscription!: Subscription;
  private isBrowser: boolean;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      // Safe to access window here
      this.orientationSubject.next(this.getCurrentOrientation());

      this.ngZone.runOutsideAngular(() => {
        this.resizeSubscription = fromEvent(window, 'resize').subscribe(() => {
          const newOrientation = this.getCurrentOrientation();
          this.ngZone.run(() => {
            this.orientationSubject.next(newOrientation);
          });
        });
      });
    }
  }

  private getCurrentOrientation(): Orientation {
    if (!this.isBrowser) return 'landscape'; // default fallback
    return window.matchMedia('(orientation: portrait)').matches
      ? 'portrait'
      : 'landscape';
  }

  ngOnDestroy(): void {
    this.resizeSubscription?.unsubscribe();
  }
}
