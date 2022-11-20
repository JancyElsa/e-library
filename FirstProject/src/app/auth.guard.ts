import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:ProductsService,private routs:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(this.service.isuser()==true || this.service.isadmin())
      {
        return true;
      }
      window.alert("You don't have permission to view this page");
      this.routs.navigateByUrl('/Login');
      return false;
    }
}
