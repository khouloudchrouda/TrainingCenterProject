import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-confirmation',
  templateUrl: './popup-confirmation.component.html',
  styleUrls: ['./popup-confirmation.component.css']
})
export class PopupConfirmationComponent {
  show_popup = true;

  close(){
    this.show_popup = false
  }
  DeleteFormation(){
    this.show_popup = false
  }
}
