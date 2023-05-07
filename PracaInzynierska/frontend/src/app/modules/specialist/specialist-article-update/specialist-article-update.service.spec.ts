import { TestBed } from '@angular/core/testing';

import { SpecialistArticleUpdateService } from './specialist-article-update.service';

describe('SpecialistArticleUpdateService', () => {
  let service: SpecialistArticleUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialistArticleUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
