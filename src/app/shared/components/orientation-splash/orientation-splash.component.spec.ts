import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientationSplashComponent } from './orientation-splash.component';

describe('OrientationSplashComponent', () => {
  let component: OrientationSplashComponent;
  let fixture: ComponentFixture<OrientationSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrientationSplashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrientationSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
