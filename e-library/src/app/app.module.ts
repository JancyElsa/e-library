import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminAddBookComponent } from './admin-add-book/admin-add-book.component'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { HomeComponent } from './home/home.component'
import { CommonInterceptor } from './common.interceptor';
import { BlueBackgroundDirective } from './blue-background.directive';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminAddBookComponent,
    AdminSearchComponent,
    HomeComponent,
    BlueBackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:CommonInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
