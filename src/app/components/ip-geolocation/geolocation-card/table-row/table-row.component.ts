import {Component, Input, Optional} from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent {

  @Input() key!: string;
  @Input() value!: any;
  @Input() @Optional() imgSrc: string | undefined;

}
