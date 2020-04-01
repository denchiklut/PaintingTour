import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number): unknown {
    if (!value) { return null; }

    const actualLimit = limit ? limit : 10;
    const result = value.substr(0, limit ? limit : 10);

    if (actualLimit >= value.length) {
      return result;
    }
    return result + '...';
  }

}
