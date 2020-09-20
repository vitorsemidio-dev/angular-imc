import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const unit = 'kg';

    const weight = value.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const result = `${weight} ${unit}`;
    return result;
  }

}
