import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details-categorie',
  templateUrl: './details-categorie.component.html',
  styleUrls: ['./details-categorie.component.css']
})
export class DetailsCategorieComponent {
  @Input() type : string = "" ;
  @Output() close = new EventEmitter<any>();

  showPopupDelete = false
  

  DeleteFormation(){
    this.showPopupDelete = true
  }

  closePopup(){
    this.close.emit(false);
  }
  EditFormation(){
    
  }

}