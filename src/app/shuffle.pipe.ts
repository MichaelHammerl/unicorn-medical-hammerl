import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffle'
})
export class ShufflePipe implements PipeTransform {

  // Sortierung eines Arrays nach zufälliger Reihenfolge, Algorithmus aus SO übernommen
  transform(value: any, args?: any): any {
    for (let i = value.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [value[i], value[j]] = [value[j], value[i]];
    }
    return value;
  }

}
