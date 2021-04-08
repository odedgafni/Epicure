import { TestBed } from '@angular/core/testing';

import { ScreenWatcherService } from './screen-watcher.service';

describe('ScreenWatcherService', () => {
  let service: ScreenWatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenWatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
