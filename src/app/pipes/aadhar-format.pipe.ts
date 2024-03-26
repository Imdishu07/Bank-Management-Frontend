import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aadharFormat'
})
export class AadharFormatPipe implements PipeTransform {

  transform(value: string): string {

    value = value.replace(/\D/g, '');

    const regex = /(\d{4})(\d{4})(\d{4})/;
    const parts = value.match(regex);

    if (parts) {
      return parts.slice(1).join(' ');
    }
    return value;
  }

}
