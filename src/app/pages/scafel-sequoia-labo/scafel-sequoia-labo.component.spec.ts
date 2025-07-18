import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScafelSequoiaLaboComponent } from './scafel-sequoia-labo.component';

describe('ScafelSequoiaLaboComponent', () => {
  let component: ScafelSequoiaLaboComponent;
  let fixture: ComponentFixture<ScafelSequoiaLaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScafelSequoiaLaboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScafelSequoiaLaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
