import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString.length === 0) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      const propertyString = item[propName];
      if (propertyString === filterString) {
        resultArray.push(item);
      }
      let startingIndex = 0;
      //this is not working!
      do {
        if (propertyString.substring(startingIndex, filterString.length + startingIndex) === filterString) {
          resultArray.push(item);
          break;
        }
        startingIndex++;
      }
      while (startingIndex < propertyString.length - filterString.length);
    }
    return resultArray;
  }
}
