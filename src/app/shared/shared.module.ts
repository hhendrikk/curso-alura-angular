import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterGrayscaleDirective } from './directives/filter-grayscale.directive';
import { VMessageComponent } from './vmessage/vmessage.component';
import { ImmediateClickDirective } from './directives/immediate-click.directive';
import { AlertComponent } from './alert/alert.component';
import { ShowIfLoggedDirective } from './directives/show-if-logged.directive';

@NgModule({
  declarations: [
    FilterGrayscaleDirective,
    VMessageComponent,
    ImmediateClickDirective,
    AlertComponent,
    ShowIfLoggedDirective
  ],
  imports: [CommonModule],
  exports: [
    FilterGrayscaleDirective,
    VMessageComponent,
    ImmediateClickDirective,
    AlertComponent,
    ShowIfLoggedDirective
  ]
})
export class SharedModule {}
