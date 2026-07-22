import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AddAppiontmentService } from './add-appiontment.service';

describe('AddAppiontmentService', () => {
  let service: AddAppiontmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(AddAppiontmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
