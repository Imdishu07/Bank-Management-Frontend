import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from 'express';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authService:AuthService, private toastr: ToastrService){}
  isLoggedIn: boolean = false;

  action:string='Login';
  onSubmit(){
   this.authService.isAuthenticate=!this.authService.isAuthenticated();
   if(this.authService.isAuthenticated()){
    this.action='LogOut'
    this.toastr.success("Log In Successful")
   }else{
    this.action='Login'
    this.toastr.error("Logged Out")
    
   } 
  }
}
