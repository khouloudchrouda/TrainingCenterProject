import { Component, Input } from '@angular/core';
import { CategoriesService } from 'src/app/gestion-Categories/categories.service';

@Component({
  selector: 'app-popup-confirmation',
  templateUrl: './popup-confirmation.component.html',
  styleUrls: ['./popup-confirmation.component.css']
})
export class PopupConfirmationComponent {
  show_popup = true;
  @Input() title : any = "" ;
  @Input() data : any = "" ;


  constructor(private categoriesService: CategoriesService) {}

  close(){
    this.show_popup = false
  }
  DeleteFormation(){
    this.categoriesService.deleteCategory(this.data);
    
  }
}
