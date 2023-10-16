import { Component, EventEmitter, Output } from '@angular/core';
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

  reorderable: boolean = true;
  loadingIndicator: boolean = true;
  currentPage = 1;
  pageSize = 10;
  Data: any[] = [];

  constructor(protected router: Router){}

  rows = [
    { N: '1', title: 'Fondamentaux techniques de la securité des systemes d’information', Category: 'Securité', Durée: '3semaines', Prix: '40£' },
    { N: '2', title: 'Principe et organisation des audits en securité', Category: 'Securité', Durée: '2 semaines', Prix: '70£' },
    { N: '3', title: 'developpement des applications mobile', Category: 'Developement', Durée: '6 mois', Prix: '140£' },
    { N: '4', title: 'Fondamentaux techniques de la securité des systemes d’information', Category: 'Securité', Durée: '3semaines', Prix: '40£' },
    { N: '5', title: 'Principe et organisation des audits en securité', Category: 'Securité', Durée: '2 semaines', Prix: '70£' },
    { N: '6', title: 'developpement des applications mobile', Category: 'Developement', Durée: '6 mois', Prix: '140£' },
    { N: '7', title: 'Fondamentaux techniques de la securité des systemes d’information', Category: 'Securité', Durée: '3semaines', Prix: '40£' },
    { N: '8', title: 'Principe et organisation des audits en securité', Category: 'Securité', Durée: '2 semaines', Prix: '70£' },
    { N: '9', title: 'developpement des applications mobile', Category: 'Developement', Durée: '6 mois', Prix: '140£' }
  ];
  columns = [
    { prop: 'N'  , name :'N'},
    { prop: 'title'  , name :'title'},
    { prop: 'Category' , name :'Category' },
    { prop: 'Durée'  , name :'Durée'},
    { prop: 'Prix'  , name :'Prix' }
  ];

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
