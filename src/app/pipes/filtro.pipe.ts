import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(arreglo: any[], text: string = '', column: string = 'title'): any[] {
    if (text === '' || text === undefined || text === 'all') {
      return arreglo;
    }
    if (!arreglo || arreglo.length <= 0) {
      return arreglo;
    }

    text = text.toLowerCase();
    return arreglo.filter((item) => item[column].toLowerCase().includes(text));
  }
}
