import { TestBed } from '@angular/core/testing';

import { NoificationServiceService } from './noification-service.service';

describe('NoificationServiceService', () => {
  let service: NoificationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoificationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
