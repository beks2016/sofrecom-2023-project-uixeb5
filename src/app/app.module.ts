import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';
import { AlertSucessComponent } from './components/alert-sucess/alert-sucess.component';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonComponent } from './experiments/components-props-events/inputs-outputs/button/button.component';
import { InputsOutputsComponent } from './experiments/components-props-events/inputs-outputs/inputs-outputs.component';
import { DataBindingComponent } from './experiments/data-binding/data-binding.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { Workshop04Component } from './workshops/workshop04/workshop04.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    AlertErrorComponent,
    AlertSucessComponent,
    Workshop04Component,
    DataBindingComponent,
    InputsOutputsComponent,
    ButtonComponent,
    AlertComponent,
    UserFormComponent,
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
