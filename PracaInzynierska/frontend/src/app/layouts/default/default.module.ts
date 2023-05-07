import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from 'src/app/modules/article/article.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleDetailsComponent } from 'src/app/modules/article-details/article-details.component';
import { SpecialistArticleComponent } from 'src/app/modules/specialist/specialist-article/specialist-article.component';
import { SpecialistArticleUpdateComponent } from 'src/app/modules/specialist/specialist-article-update/specialist-article-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpecialistArticleAddComponent } from 'src/app/modules/specialist/specialist-article-add/specialist-article-add.component';
import { SpecialistArticleFormComponent } from 'src/app/modules/specialist/specialist-article-form/specialist-article-form.component';
import { SpecialistConfirmDialogComponent } from 'src/app/modules/specialist/specialist-confirm-dialog/specialist-confirm-dialog.component';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';
import { SpecialistListComponent } from 'src/app/modules/specialist/specialist-list/specialist-list.component';

import { SpecialistDetailsComponent } from 'src/app/modules/specialist/specialist-details/specialist-details.component';
import { SpecialistProfileComponent } from 'src/app/modules/specialist/specialist-profile/specialist-profile.component';
import {UserConfirmDialogComponent} from "../../modules/user/user-confirm-dialog/user-confirm-dialog.component";
import {
  RoleChangeConfirmDialogComponent
} from "../../modules/user/role-change-confirm-dialog/role-change-confirm-dialog.component";
import {
  ArticleBySpecialistComponent
} from "../../modules/article/article-by-specialist/article-by-specialist.component";


@NgModule({
  declarations: [
    DefaultComponent,
    ArticleComponent,
    HomeComponent,
    ArticleDetailsComponent,
    SpecialistArticleComponent,
    SpecialistArticleUpdateComponent,
    SpecialistArticleAddComponent,
    SpecialistArticleFormComponent,
    SpecialistConfirmDialogComponent,
    ProfileComponent,
    SpecialistListComponent,
    SpecialistDetailsComponent,
    SpecialistProfileComponent,
    UserConfirmDialogComponent,
    RoleChangeConfirmDialogComponent,
    ArticleBySpecialistComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
