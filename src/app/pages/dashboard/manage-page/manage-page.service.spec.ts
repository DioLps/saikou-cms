import { TestBed } from '@angular/core/testing';

import { ManagePageService } from './manage-page.service';

describe('ManagePageService', () => {
  let service: ManagePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
