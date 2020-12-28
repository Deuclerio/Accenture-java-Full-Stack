import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskDetailComponent } from './list-task-detail.component';

describe('ListTaskDetailComponent', () => {
  let component: ListTaskDetailComponent;
  let fixture: ComponentFixture<ListTaskDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTaskDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
