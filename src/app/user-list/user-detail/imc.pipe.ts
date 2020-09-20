import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imc'
})
export class ImcPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const imc = value.toLocaleString('pt-br', {
      maximumFractionDigits: 2,
    });

    const result = `${imc} kg/m²`;
    return result;
  }

}
