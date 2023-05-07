import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {SpecialistArticleAddService} from './specialist-article-add.service';
import {SpecialistArticleUpdate} from "../specialist-article-update/model/specialistArticleUpdate";
import {SpecialistArticleUpdateService} from "../specialist-article-update/specialist-article-update.service";

@Component({
  selector: 'app-specialist-article-add',
  templateUrl: './specialist-article-add.component.html',
  styleUrls: ['./specialist-article-add.component.scss']
})
export class SpecialistArticleAddComponent {

  articleForm!: FormGroup;
  requiredFileTypes = "image/jpeg, image/png";
  imageForm!: FormGroup;
  image: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private specialistArticleAddService: SpecialistArticleAddService,
    private specialistArticleUpdateService: SpecialistArticleUpdateService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.required],
      shortDescription: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.imageForm = this.formBuilder.group({
      file: ['']
    })
  }

  submit() {
    this.specialistArticleAddService.saveNewArticle({
      title: this.articleForm.get('title')?.value,
      shortDescription: this.articleForm.get('shortDescription')?.value,
      description: this.articleForm.get('description')?.value,
      image: this.image
    } as unknown as SpecialistArticleUpdate).subscribe({
      next: article => {
        this.router.navigate(["/my-articles"])
          .then(() => this.snackBar.open("Artykuł został dodany", '', {duration: 3000}))
      },
    })
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

}
