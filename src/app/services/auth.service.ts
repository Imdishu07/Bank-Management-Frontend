import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 isAuthenticate:boolean=false;
  isAuthenticated(){
    if(this.isAuthenticate){
      return true;
    }
    return false;
  }
}

