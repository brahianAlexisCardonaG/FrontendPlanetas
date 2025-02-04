import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSecurityImg'
})
export class RemoveSecurityImgPipe implements PipeTransform {

  transform(value: string): string {
    if (value && (value.startsWith('http://') || value.startsWith('https://'))) {
      return value.replace(/^https?:\/\//, 'http://');
    }
    return value;
  }

}
