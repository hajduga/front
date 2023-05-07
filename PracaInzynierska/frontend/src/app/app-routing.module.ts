import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {FullpageComponent} from './layouts/fullpage/fullpage.component';
import {FullpageadminComponent} from './layouts/fullpageadmin/fullpageadmin.component';
import {FullpageadminclearComponent} from './layouts/fullpageadminclear/fullpageadminclear.component';
import {AdminLoginComponent} from './modules/admin/admin-login/admin-login.component';
import {AdminComponent} from './modules/admin/admin.component';
import {ArticleDetailsComponent} from './modules/article-details/article-details.component';
import {ArticleComponent} from './modules/article/article.component';
import {AdminAuthorizeGuard} from './modules/common/guard/adminAuthorizeGuard';
import {HomeComponent} from './modules/home/home.component';
import {LoginComponent} from './modules/login/login.component';
import {ProfileComponent} from './modules/profile/profile.component';
import {SpecialistListComponent} from './modules/specialist/specialist-list/specialist-list.component';
import {
  SpecialistArticleAddComponent
} from './modules/specialist/specialist-article-add/specialist-article-add.component';
import {
  SpecialistArticleUpdateComponent
} from './modules/specialist/specialist-article-update/specialist-article-update.component';
import {SpecialistArticleComponent} from './modules/specialist/specialist-article/specialist-article.component';
import {SpecialistDetailsComponent} from './modules/specialist/specialist-details/specialist-details.component';
import {SpecialistProfileComponent} from './modules/specialist/specialist-profile/specialist-profile.component';
import {AdminUsersComponent} from "./modules/admin/admin-users/admin-users.component";
import {AdminRequestsComponent} from "./modules/admin/admin-requests/admin-requests.component";
import {ArticleBySpecialistComponent} from "./modules/article/article-by-specialist/article-by-specialist.component";
import {AuthorizeGuard} from "./modules/common/guard/authorizeGuard";

const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'articles', component: ArticleComponent},
      {path: 'articles/:id', component: ArticleDetailsComponent},
      {path: 'my-articles', component: SpecialistArticleComponent, canActivate: [AuthorizeGuard]},
      {path: 'my-articles/update/:id', component: SpecialistArticleUpdateComponent, canActivate: [AuthorizeGuard]},
      {path: 'my-articles/add', component: SpecialistArticleAddComponent, canActivate: [AuthorizeGuard]},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthorizeGuard]},
      {path: 'specialists', component: SpecialistListComponent},
      {path: 'specialists/:id', component: SpecialistDetailsComponent},
      {path: 'specialists/:id/articles', component: ArticleBySpecialistComponent},
      {path: 'profile/specialist', component: SpecialistProfileComponent}
    ]
  },
  {
    path: '', component: FullpageComponent, children: [
      {path: 'login', component: LoginComponent}
    ]
  },
  {
    path: '', component: FullpageadminComponent, children: [
      {path: 'admin', component: AdminComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/users', component: AdminUsersComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/requests', component: AdminRequestsComponent, canActivate: [AdminAuthorizeGuard]}
    ]
  },
  {
    path: '', component: FullpageadminclearComponent, children: [
      {path: 'admin/login', component: AdminLoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
