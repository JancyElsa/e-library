import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsService } from './products.service';
import { AuthGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AdminGuard } from './admin.guard';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    AddbookComponent,
    AboutpageComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService,AuthGuard,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
