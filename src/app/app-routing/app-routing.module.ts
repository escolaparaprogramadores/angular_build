import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { AdminComponent } from '../admin/admin.component';
import { AuthGuard } from '../guards/auth.guard';
import { AppComponent } from '../app.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'auth/login', component: LoginComponent },
    ]),

  
  ],
  declarations: []
})
export class AppRoutingModule { }
