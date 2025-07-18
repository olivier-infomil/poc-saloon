import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbacoMobileComponent } from './abaco-mobile.component';

describe('AbacoMobileComponent', () => {
  let component: AbacoMobileComponent;
  let fixture: ComponentFixture<AbacoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbacoMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbacoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
