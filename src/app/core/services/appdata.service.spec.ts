import { TestBed } from '@angular/core/testing';

import { AppdataService } from './appdata.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppdataService', () => {
  let service: AppdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(AppdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
