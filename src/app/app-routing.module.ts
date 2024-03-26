import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pagefound/not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './pagefound/home/home.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  {
    path:'customer',
    canActivate:[authGuard],
    loadChildren:()=> import('./customers/customers.module').then(x=>x.CustomersModule)
  },
  {
    path:'account',
    canActivate:[authGuard],
    loadChildren:()=> import('./account/account.module').then(x=>x.AccountModule)
    
  },
  {
    path:'transaction',
    canActivate:[authGuard],
    loadChildren:()=> import('./transaction/transaction.module').then(x=>x.TransactionModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
