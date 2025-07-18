import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationHpComponent } from './navigation-hp.component';

describe('NavigationHpComponent', () => {
  let component: NavigationHpComponent;
  let fixture: ComponentFixture<NavigationHpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationHpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
