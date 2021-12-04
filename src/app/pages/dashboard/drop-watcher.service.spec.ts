import { TestBed } from '@angular/core/testing';

import { DropWatcherService } from './drop-watcher.service';

describe('DropWatcherService', () => {
  let service: DropWatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropWatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
