import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilFideliteComponent } from './accueil-fidelite.component';

describe('AccueilFideliteComponent', () => {
  let component: AccueilFideliteComponent;
  let fixture: ComponentFixture<AccueilFideliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilFideliteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilFideliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
