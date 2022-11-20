import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
path:'',component:HomeComponent
  },
  {
path:'register',component:RegisterComponent
},
{
  path:'login',component:LoginComponent
  
  },
  {
    path:'search-book',component:AdminSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
