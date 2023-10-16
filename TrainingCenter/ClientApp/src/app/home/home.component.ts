import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showDetails = false;
  type_action = "";
  showFormulaire = false


  OpenRow(row: any){
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
  }
  OpenFormulaire(){
    this.showFormulaire = true;
  }
}
