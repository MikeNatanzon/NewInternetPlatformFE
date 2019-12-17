import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeadersInterceptor } from './shared/interceptors/headers-interceptor.service';
import { AppHttpInterceptor } from './shared/interceptors/app-http-interceptor.service';
import { ErrorHttpInterceptor } from './shared/interceptors/error-http-interceptor.service';
import { UserInfoService } from './shared/services/user-info.service';

import { AppComponent } from './app.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NipHeaderComponent } from './nip-header/nip-header.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    DashboardComponent,
    NipHeaderComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHttpInterceptor,
      multi: true
    },
    UserInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
