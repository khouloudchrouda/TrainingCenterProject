import { Component } from '@angular/core';
import { columnsformations, formations } from 'src/app/data/formations';

@Component({
  selector: 'app-list-formations',
  templateUrl: './list-formations.component.html',
  styleUrls: ['./list-formations.component.css']
})
export class ListFormationsComponent {
  showDetails = false;
  type_action = "";
  showFormulaire = false
  Data = formations
  Columns = columnsformations


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
  }
  OpenFormulaire(){
    this.showFormulaire = true;
  }
}
