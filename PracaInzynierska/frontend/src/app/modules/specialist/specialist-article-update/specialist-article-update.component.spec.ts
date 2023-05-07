import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistArticleUpdateComponent } from './specialist-article-update.component';

describe('SpecialistArticleUpdateComponent', () => {
  let component: SpecialistArticleUpdateComponent;
  let fixture: ComponentFixture<SpecialistArticleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistArticleUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialistArticleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
