import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DefaultModule} from './layouts/default/default.module';
import {FullpageModule} from './layouts/fullpage/fullpage.module';
import {FullpageadminModule} from './layouts/fullpageadmin/fullpageadmin.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FullpageadminclearModule} from './layouts/fullpageadminclear/fullpageadminclear.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtInterceptor} from './modules/common/interceptor/jwt.interceptor';
import {AdminAuthorizeGuard} from './modules/common/guard/adminAuthorizeGuard';
import {AuthorizeGuard} from "./modules/common/guard/authorizeGuard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullpageModule,
    FullpageadminModule,
    FullpageadminclearModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    AdminAuthorizeGuard,
    AuthorizeGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
