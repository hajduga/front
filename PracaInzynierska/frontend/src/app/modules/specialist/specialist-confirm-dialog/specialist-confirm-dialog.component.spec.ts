import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistConfirmDialogComponent } from './specialist-confirm-dialog.component';

describe('SpecialistConfirmDialogComponent', () => {
  let component: SpecialistConfirmDialogComponent;
  let fixture: ComponentFixture<SpecialistConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistConfirmDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialistConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
