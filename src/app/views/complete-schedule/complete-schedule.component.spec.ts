import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteScheduleComponent } from './complete-schedule.component';

describe('CompleteScheduleComponent', () => {
  let component: CompleteScheduleComponent;
  let fixture: ComponentFixture<CompleteScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
