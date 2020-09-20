import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const unit = value > 1 ? 'm' : 'cm';

    const height = value.toLocaleString('pt-br', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });

    const result = `${height} ${unit}`;
    return result;
  }

}
