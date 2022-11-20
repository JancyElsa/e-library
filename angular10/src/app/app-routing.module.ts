import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { SuperadminGuard } from './superadmin.guard';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminaccessGuard } from './adminaccess.guard';
import { SettingsauthGuard } from './settingsauth.guard';
import { SearchComponent } from './search/search.component';
import { UnsavedGuard } from './unsaved.guard';
const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
   path:'about',component:AboutComponent,canActivate:[AuthGuard]
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'admin',
    
    canActivate:[SuperadminGuard],
    
    children:[
      {
      path:'',component:AdminComponent
    },
    {
      path:'',
      canActivateChild:[AdminaccessGuard],
      children:[
        {
          path:'edit',component:AdminEditComponent
        },
        {
          path:'delete',component:AdminDeleteComponent
        }
      ]
    }

  ]
  },
  {
path:'search',component:SearchComponent,
canDeactivate:[UnsavedGuard]
  },

  {
    path:'**',component:PagenotfoundComponent
  },
  {
    path:'',redirectTo:'HomeComponent',pathMatch:'full'
  },
  { path:'settings', 
  canLoad:[SettingsauthGuard],
  loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
