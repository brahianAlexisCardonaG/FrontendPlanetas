import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fechaFormatAMD',
    standalone: true
})
export class FechaFormatAMDPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    const date = new Date(value);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }
}
