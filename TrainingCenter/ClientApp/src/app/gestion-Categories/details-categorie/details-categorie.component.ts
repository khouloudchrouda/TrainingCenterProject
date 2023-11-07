import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoriesService } from 'src/app/gestion-Categories/categories.service';

@Component({
  selector: 'app-details-categorie',
  templateUrl: './details-categorie.component.html',
  styleUrls: ['./details-categorie.component.css']
})
export class DetailsCategorieComponent {
  @Input() type : string = "" ;
  @Output() close = new EventEmitter<any>();
  title : string = 'Voulez-vous vraiment supprimer La Categorie?';
  showPopupDelete = false
  category_data : any = {};

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.category_data = this.categoriesService.getCategoryById();
  }

  DeleteFormation(){
    this.showPopupDelete = true
  }

  closePopup(){
    this.close.emit(false);
  }
  EditFormation(){
    this.categoriesService.updateCategory(this.category_data);
  }

}