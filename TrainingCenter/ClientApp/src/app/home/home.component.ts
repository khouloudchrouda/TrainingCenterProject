import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { columnsformations, formations } from '../data/formations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
