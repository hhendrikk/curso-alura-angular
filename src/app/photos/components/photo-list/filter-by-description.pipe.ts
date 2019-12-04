import { Pipe, PipeTransform } from '@angular/core';

import { IPhoto } from '../../models/photo.model';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {
  transform(photos: IPhoto[], descriptionFilter: string = ''): any {
    photos = photos || [];
    const filter = descriptionFilter.trim().toLocaleLowerCase();

    if (filter) {
      return photos.filter(photo =>
        photo.description.toLocaleLowerCase().includes(filter)
      );
    } else {
      return photos;
    }
  }
}
