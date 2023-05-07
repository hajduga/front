import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistArticleAddComponent } from './specialist-article-add.component';

describe('SpecialistArticleAddComponent', () => {
  let component: SpecialistArticleAddComponent;
  let fixture: ComponentFixture<SpecialistArticleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistArticleAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialistArticleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
