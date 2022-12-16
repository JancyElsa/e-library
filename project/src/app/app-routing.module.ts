import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
      },
  {
    path:'',component:HomeComponent,pathMatch:'full'
      },
      {
        path:'about',component:AboutComponent
          },
      {
    path:'contact',component:ContactComponent
    },
    {
      path:'login',component:LoginComponent
      
      },
      {
        path:'register',component:RegisterComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
