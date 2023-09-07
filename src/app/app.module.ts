import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

import { AppComponent } from './app.component';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';
import { AlertSucessComponent } from './components/alert-sucess/alert-sucess.component';
import { AlertComponent } from './components/alert/alert.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { ButtonComponent } from './experiments/components-props-events/inputs-outputs/button/button.component';
import { InputsOutputsComponent } from './experiments/components-props-events/inputs-outputs/inputs-outputs.component';
import { DataBindingComponent } from './experiments/data-binding/data-binding.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    AlertErrorComponent,
    AlertSucessComponent,
    DataBindingComponent,
    InputsOutputsComponent,
    ButtonComponent,
    AlertComponent,
    UserFormComponent,
    NavbarComponent,
    AdminComponent,
    DashboardComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin',
      },
      {
        path: 'dashboard',
        component: DashboardComponentComponent,
      },

      {
        path: 'admin',
        component: AdminComponent,
      },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
