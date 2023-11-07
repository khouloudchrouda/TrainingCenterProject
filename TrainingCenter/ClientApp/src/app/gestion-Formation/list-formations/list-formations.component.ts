import { Component, EventEmitter, Output } from '@angular/core';
import { Filterformations, columnsformations, formations } from 'src/app/data/formations';

@Component({
  selector: 'app-list-formations',
  templateUrl: './list-formations.component.html',
  styleUrls: ['./list-formations.component.css']
})
export class ListFormationsComponent {

  showDetails = false;
  showfilter = false;
  type_action = "";
  showFormulaire = false
  Data = formations
  Columns = columnsformations
  filterDef : any = {}

  ngOnInit() {
  this.filterDef = Filterformations
  }

  OpenRow(row: any): void{
    console.log('im in open')
    this.showDetails = true;
    this.type_action = "open"
  }
  DeleteRow(row: any){
    console.log('im in delete')
    this.showDetails = true;
    this.type_action = "delete"
  }
  EditRow(row: any){
    console.log('im in edit')
    this.showDetails = true;
    this.type_action = "edit"
  }

  closePopup(value : boolean){
    this.showDetails = value;
    this.showFormulaire = value;
    this.showfilter = value
  }

  OpenFormulaire(){
    this.showFormulaire = true;
  }
  OpenFiltre(){
    this.showfilter =!this.showfilter
    console.log("this.showfilter" , this.showfilter)
  }

}
