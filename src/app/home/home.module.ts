import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, SharedModule]
})
export class HomeModule {}
