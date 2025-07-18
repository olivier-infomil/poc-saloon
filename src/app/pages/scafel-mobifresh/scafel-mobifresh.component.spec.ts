import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScafelMobifreshComponent } from './scafel-mobifresh.component';

describe('ScafelMobifreshComponent', () => {
  let component: ScafelMobifreshComponent;
  let fixture: ComponentFixture<ScafelMobifreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScafelMobifreshComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScafelMobifreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
