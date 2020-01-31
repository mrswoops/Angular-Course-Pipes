import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(value: any) {
        let charArray = value.split('');
        charArray.reverse();
        return charArray.join('');
    }
}