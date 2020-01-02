import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterGrayscaleDirective } from './directives/filter-grayscale.directive';
import { VMessageComponent } from './vmessage/vmessage.component';
import { ImmediateClickDirective } from './directives/immediate-click.directive';

@NgModule({
  declarations: [
    FilterGrayscaleDirective,
    VMessageComponent,
    ImmediateClickDirective
  ],
  imports: [CommonModule],
  exports: [
    FilterGrayscaleDirective,
    VMessageComponent,
    ImmediateClickDirective
  ]
})
export class SharedModule {}
