import { Component } from '@angular/core';
import { categories, columnscategories } from 'src/app/data/categories';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  showDetails = false;
  type_action = "";
  showFormulaire = false
  Data = categories
  Columns = columnscategories


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
