import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DepartmentsService } from './departments.service';

describe('DepartmentsService', () => {
  let service: DepartmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(DepartmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
