import { TestBed } from '@angular/core/testing';

import { ListTaskApiService } from './list-task-api.service';

describe('ListTaskApiService', () => {
  let service: ListTaskApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTaskApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
