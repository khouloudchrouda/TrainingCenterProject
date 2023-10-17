import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent {
  @Output() close = new EventEmitter<any>();

  
  closePopup(){
    this.close.emit(false);
  }

}
