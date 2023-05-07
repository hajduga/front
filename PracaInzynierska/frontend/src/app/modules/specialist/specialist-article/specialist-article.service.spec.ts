import { TestBed } from '@angular/core/testing';

import { SpecialistArticleService } from './specialist-article.service';

describe('SpecialistArticleService', () => {
  let service: SpecialistArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialistArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
