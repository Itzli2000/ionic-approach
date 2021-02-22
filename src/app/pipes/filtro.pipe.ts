import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(arreglo: any[], text: string = ''): any[] {
    if (text === '' || text === undefined) {
      return arreglo;
    }
    if (!arreglo || arreglo.length <= 0) {
      return arreglo;
    }

    text = text.toLowerCase();
    return arreglo.filter((item) => item.title.toLowerCase().includes(text));
  }
}
