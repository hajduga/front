import { TestBed } from '@angular/core/testing';

import { SpecialistArticleAddService } from './specialist-article-add.service';

describe('SpecialistArticleAddService', () => {
  let service: SpecialistArticleAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialistArticleAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
