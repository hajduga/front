import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleChangeConfirmDialogComponent } from './role-change-confirm-dialog.component';

describe('RoleChangeConfirmDialogComponent', () => {
  let component: RoleChangeConfirmDialogComponent;
  let fixture: ComponentFixture<RoleChangeConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleChangeConfirmDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleChangeConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
