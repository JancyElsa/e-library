import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RulesComponent } from './rules/rules.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'Home',component:HomeComponent},
  {path:'Search',component:SearchComponent,canActivate:[AuthGuard]},
  {path:'Addbook',component:AddbookComponent,canActivate:[AdminGuard]},
  {path:'Aboutpage',component:AboutpageComponent},
  {path:'Rules',component:RulesComponent},
  {path:'',redirectTo:'/Login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
