import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterGrayscaleDirective } from './filter-grayscale.directive';
import { VMessageComponent } from './vmessage/vmessage.component';

@NgModule({
  declarations: [FilterGrayscaleDirective, VMessageComponent],
  imports: [CommonModule],
  exports: [FilterGrayscaleDirective, VMessageComponent]
})
export class SharedModule {}
