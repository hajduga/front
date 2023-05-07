import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleDetailsService} from './article-details.service';
import {ArticleDetails} from './model/articleDetails';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Comment} from './model/comment';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit{

  article!: ArticleDetails;
  commentForm!: FormGroup;
  comment!: Comment;

  constructor(
    private articleDetailsService: ArticleDetailsService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {

  }

  ngOnInit() {
    this.getArticleDetails();
    this.commentForm = this.formBuilder.group({
      authorName: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  getArticleDetails() {
    let slug = this.router.snapshot.params['id'];
    this.articleDetailsService.getArticleDetails(slug)
      .subscribe(article => this.article = article);
  }


  submit() {
    if (this.commentForm.valid) {
      this.articleDetailsService.saveArticleComment({
        authorName: this.commentForm.get("authorName")?.value,
        content: this.commentForm.get("content")?.value,
        articleId: this.article.id
      } as Comment).subscribe(comment => {
        this.commentForm.reset();
        this.snackBar.open('Dziękujemy za dodanie komentarza','', {duration: 3000});
      });
    }
  }

  get authorName() {
    return this.commentForm.get('authorName');
  }

  get content() {
    return this.commentForm.get('content');
  }

}
