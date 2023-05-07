import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistArticleComponent } from './specialist-article.component';

describe('SpecialistArticleComponent', () => {
  let component: SpecialistArticleComponent;
  let fixture: ComponentFixture<SpecialistArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialistArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
