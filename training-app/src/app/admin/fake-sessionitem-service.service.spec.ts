import { TestBed } from '@angular/core/testing';

import { FakeSessionitemServiceService } from './fake-sessionitem-service.service';

describe('FakeSessionitemServiceService', () => {
  let service: FakeSessionitemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeSessionitemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
