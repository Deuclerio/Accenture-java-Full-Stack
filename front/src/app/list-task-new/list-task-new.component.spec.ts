import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskNewComponent } from './list-task-new.component';

describe('ListTaskNewComponent', () => {
  let component: ListTaskNewComponent;
  let fixture: ComponentFixture<ListTaskNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTaskNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
