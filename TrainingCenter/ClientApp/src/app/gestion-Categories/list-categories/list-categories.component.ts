import { Component } from '@angular/core';
import { categories, columnscategories } from 'src/app/data/categories';
import { CategoriesService } from 'src/app/gestion-Categories/categories.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  showDetails = false;
  type_action = "";
  showFormulaire = false
  Data = categories;
  Columns = columnscategories
  datasource : any
  showList = false;
  constructor(private categoriesService: CategoriesService) {}
  
   ngOnInit() {
    this.categoriesService.getListCategories().subscribe((data) => (
       this.datasource = data,
       console.log("this." , this.datasource),
       this.showList = true
      ));
  }

  OpenRow(row: any): void{
    this.showDetails = true;
    this.type_action = "open"
    this.categoriesService.setCategoryId(row)
  }
  DeleteRow(row: any){
    this.showDetails = true;
    this.type_action = "delete"
    this.categoriesService.setCategoryId(row)
  }
  EditRow(row: any){
    this.showDetails = true;
    this.type_action = "edit"
    this.categoriesService.setCategoryId(row)
  }

  closePopup(value : boolean){
    this.showDetails = value;
    this.showFormulaire = value;
  }
  OpenFormulaire(){
    this.showFormulaire = true;
  }
}
