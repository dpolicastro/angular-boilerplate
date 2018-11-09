// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { AuthRoutingModule } from './auth.routing';

// Components
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: []
})
export class AuthModule { }
