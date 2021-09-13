import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string): string {
    if (value?.length > 0)
      return value;
    else
      return "Sin información..";
  }

}
