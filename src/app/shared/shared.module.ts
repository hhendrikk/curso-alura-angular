import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterGrayscaleDirective } from './filter-grayscale.directive';

@NgModule({
  declarations: [FilterGrayscaleDirective],
  imports: [CommonModule],
  exports: [FilterGrayscaleDirective]
})
export class SharedModule {}
