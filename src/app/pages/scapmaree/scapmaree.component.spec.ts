import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScapmareeComponent } from './scapmaree.component';

describe('ScapmareeComponent', () => {
  let component: ScapmareeComponent;
  let fixture: ComponentFixture<ScapmareeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScapmareeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScapmareeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
