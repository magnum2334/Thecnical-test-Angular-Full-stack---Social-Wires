import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDatePipe'
})
export class FormatDatePipePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: string, ...args: any[]): any {
    return this.datePipe.transform(value, 'M/d/yy, h:mm a');
  }


}
