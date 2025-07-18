import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackHpComponent } from './back-hp.component';

describe('BackHpComponent', () => {
  let component: BackHpComponent;
  let fixture: ComponentFixture<BackHpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackHpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
