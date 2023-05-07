import { TestBed } from '@angular/core/testing';

import { SpecialistConfirmDialogService } from './specialist-confirm-dialog.service';

describe('SpecialistConfirmDialogService', () => {
  let service: SpecialistConfirmDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialistConfirmDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
