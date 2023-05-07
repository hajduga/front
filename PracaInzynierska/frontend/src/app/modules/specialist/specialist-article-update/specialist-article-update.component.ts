import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';
import {SpecialistArticleUpdate} from './model/specialistArticleUpdate';
import {SpecialistArticleUpdateService} from './specialist-article-update.service';

@Component({
  selector: 'app-specialist-article-update',
  templateUrl: './specialist-article-update.component.html',
  styleUrls: ['./specialist-article-update.component.scss']
})
export class SpecialistArticleUpdateComponent {

  article!: SpecialistArticleUpdate;
  articleForm!: FormGroup;
  requiredFileTypes = "image/jpeg, image/png";
  imageForm!: FormGroup;
  image: string | null = null;

  constructor(
    private router: ActivatedRoute,
    private specialistArticleUpdateService: SpecialistArticleUpdateService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getArticle();

    this.articleForm = this.formBuilder.group({
      title: ['', Validators.required],
      shortDescription: ['', Validators.required],
      description: ['', Validators.required],
      image: ['']
    });

    this.imageForm = this.formBuilder.group({
      file: ['']
    })
  }

  getArticle() {
    let id = Number(this.router.snapshot.params['id']);
    this.specialistArticleUpdateService.getArticle(id)
      .subscribe(article => this.mapFormValues(article));
  }

  submit() {
    let id = Number(this.router.snapshot.params['id']);
    this.specialistArticleUpdateService.saveArticle(id, {
      title: this.articleForm.get('title')?.value,
      shortDescription: this.articleForm.get('shortDescription')?.value,
      description: this.articleForm.get('description')?.value,
      image: this.image
    } as SpecialistArticleUpdate).subscribe({
      next: article => {
        this.mapFormValues(article);
        this.snackBar.open("Artykuł został zapisany", '', {duration: 3000});
      }
    });
  }

  uploadFile() {
    let formData = new FormData();
    formData.append('file', this.imageForm.get('file')?.value);
    this.specialistArticleUpdateService.uploadImage(formData)
      .subscribe(result => this.image = result.filename);
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.imageForm.patchValue({
        file: event.target.files[0]
      });
    }
  }


  private mapFormValues(article: SpecialistArticleUpdate): void {
    this.articleForm.setValue({
      title: article.title,
      shortDescription: article.shortDescription,
      description: article.description,
      image: this.image
    });
    this.image = article.image;
    console.log(article.image)
  }

}
