import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-confirmation',
  templateUrl: './popup-confirmation.component.html',
  styleUrls: ['./popup-confirmation.component.css']
})
export class PopupConfirmationComponent {
  show_popup = true;
  @Input() title : any = "" ;

  close(){
    this.show_popup = false
  }
  DeleteFormation(){
    this.show_popup = false
  }
}
