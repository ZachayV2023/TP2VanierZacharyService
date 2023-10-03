import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChansonsComponent } from './chansons.component';

describe('ChansonsComponent', () => {
  let component: ChansonsComponent;
  let fixture: ComponentFixture<ChansonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChansonsComponent]
    });
    fixture = TestBed.createComponent(ChansonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
