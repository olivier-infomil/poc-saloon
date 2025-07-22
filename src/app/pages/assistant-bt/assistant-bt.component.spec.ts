import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantBtComponent } from './assistant-bt.component';

describe('AssistantBtComponent', () => {
  let component: AssistantBtComponent;
  let fixture: ComponentFixture<AssistantBtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistantBtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistantBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
