import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerItemComponent } from './timer-item.component';

describe('TimerItemComponent', () => {
  let component: TimerItemComponent;
  let fixture: ComponentFixture<TimerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
