import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(value: any, ascending: boolean, propName: string) {
        if (value.length === 0 || propName.length === 0) {
            return value;
        }
        let resultArray = [];
        let propValues = [];

        for (let item of value) {
            propValues.push(item[propName]);
        }

        propValues.sort();
        if (!ascending) {
            propValues.reverse();
        }

        let valueCopy = value.slice();

        for (let propValue of propValues) {
            let foundObj = valueCopy.find(obj => obj[propName] == propValue);
            resultArray.push(foundObj);
            valueCopy.splice(valueCopy.indexOf(foundObj), 1);
        }
        return resultArray;
    }
}