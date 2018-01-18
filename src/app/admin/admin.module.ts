import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { AppInlineProfileComponent } from '../app.profile.component';
import { AppRightpanelComponent } from '../app.rightpanel.component';
import { AppBreadcrumbComponent } from '../app.breadcrumb.component';
import { AppFooterComponent } from '../app.footer.component';
import { AppTopbarComponent } from '../app.topbar.component';
import { AppSubMenuComponent, AppMenuComponent } from '../app.menu.component';





@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    AdminRoutingModule
  
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminComponent,
    DashboardComponent,
    AppMenuComponent,
    AppSubMenuComponent,
    AppTopbarComponent,
    AppFooterComponent,
    AppBreadcrumbComponent,
    AppRightpanelComponent,
    AppInlineProfileComponent
   
  ],
  exports: [
    AdminComponent,
    DashboardComponent,
    AdminComponent,
    DashboardComponent,
    AppMenuComponent,
    AppSubMenuComponent,
    AppTopbarComponent,
    AppFooterComponent,
    AppBreadcrumbComponent,
    AppRightpanelComponent,
    AppInlineProfileComponent
   
  ]
})
export class AdminModule { }
