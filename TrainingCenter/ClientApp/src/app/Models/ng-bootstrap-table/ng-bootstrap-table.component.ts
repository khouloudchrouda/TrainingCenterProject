import { Component, EventEmitter, Output , Input ,SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ng-bootstrap-table',
  templateUrl: './ng-bootstrap-table.component.html',
  styleUrls: ['./ng-bootstrap-table.component.css']
})
export class NgBootstrapTableComponent {
  @Output() openRowEvent = new EventEmitter<any>();
  @Output() deleteRowEvent = new EventEmitter<any>();
  @Output() editRowEvent = new EventEmitter<any>();
  @Input() Data: any[] = [] ;
  @Input() Columns: any[] = [] ;

  reorderable: boolean = true;
  loadingIndicator: boolean = true;
  currentPage = 1;
  pageSize = 10;
  columns : any = [];
  rows : any = [];

  constructor(protected router: Router){}


  ngOnChanges(changes: SimpleChanges) {
    if (
        !!changes && 
        !!changes.Columns && 
        !!changes.Columns.currentValue
    ) {
        this.columns  = this.Columns
        this.rows = this.Data
    }
}

  columnWidths = [
    {column: "numero", width: 100},
    {column: "title", width: 240},
  ]

  ngOnInit() {
    this.columns.forEach((col: any) => {
      const colWidth = this.columnWidths.find(colWidth => colWidth.column === col.prop);
      if (colWidth) {
        col.width = colWidth.width;
      }
    });
  }

  getRowColorClass = (row: any) => {
    return row.someProperty ? 'red-row' : 'green-row';
  };
  OpenRow(row: any) {
    this.openRowEvent.emit(row);
  }
  DeleteRow(row: any) {
    this.deleteRowEvent.emit(row);
  }
  EditRow(row: any) {
    this.editRowEvent.emit(row);
  }
  



}
