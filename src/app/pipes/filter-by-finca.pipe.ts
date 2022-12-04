import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByFinca'
})
@Injectable()
export class FilterByFincaPipe implements PipeTransform {

  transform(items: any[], value : string): any[] {  
    if (value == '0') {
      return items;
    } else {
      if (!items) return [];
      if (!value || value.length == 0) return items;
      return items.filter(it => 
      it['finca'].toString().toLowerCase().indexOf(value.toLowerCase()) !=-1);
    }
  }
  
}
