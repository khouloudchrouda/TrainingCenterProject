import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent {
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
