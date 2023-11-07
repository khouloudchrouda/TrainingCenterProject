import { TestBed } from '@angular/core/testing';

import { MultiSelectdataService } from './multi-selectdata.service';

describe('MultiSelectdataService', () => {
  let service: MultiSelectdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiSelectdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
