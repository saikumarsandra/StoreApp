import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { SingupComponent } from './singup/singup.component';
import { AddItemComponent } from './add-item/add-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { LoginformComponent } from './loginform/loginform.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:"",redirectTo : "loginform", pathMatch: "full"},
  {path:"singup" ,component:SingupComponent},
  {path:"add-item",component:AddItemComponent,canActivate:[AuthGuard]},
  {path:'update-item/:id', component:UpdateItemComponent,canActivate:[AuthGuard]},
  {path:"productlist",component:ProductlistComponent,canActivate:[AuthGuard]},
  {path:"loginform",component:LoginformComponent},
  {path:"landing",component:LandingComponent,canActivate:[AuthGuard]},
  {path:"footer",component:FooterComponent,canActivate:[AuthGuard]},
  {path:"logout",component:LogoutComponent,canActivate:[AuthGuard]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
