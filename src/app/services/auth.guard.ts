import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


export const authGuard: CanActivateFn = (route, state) => {
  var authService=inject(AuthService);
  let router=inject(Router);
  const toastr = inject(ToastrService);

  if(authService.isAuthenticated()){
    return true;
  }  
  setTimeout(function() {
    toastr.error('You are not logged in!');
}, 2000);
  router.navigate(['/']);

  return false;
};
