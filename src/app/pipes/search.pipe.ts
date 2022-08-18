import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from '../interfaces/doctor';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(doctors: Doctor[], searchInput?: string): Doctor[] {
    if (typeof searchInput === 'undefined') return doctors;

    searchInput = searchInput.toLowerCase();
    return doctors.filter(
      x => x.name.toLowerCase().includes(searchInput as string)
    )
  }
}
