import { TestBed } from '@angular/core/testing';

import { TitleUpdaterService } from './title-updater.service';

describe('TitleUpdaterService', () => {
  let service: TitleUpdaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleUpdaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
