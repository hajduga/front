import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBySpecialistComponent } from './article-by-specialist.component';

describe('ArticleBySpecialistComponent', () => {
  let component: ArticleBySpecialistComponent;
  let fixture: ComponentFixture<ArticleBySpecialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleBySpecialistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleBySpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
