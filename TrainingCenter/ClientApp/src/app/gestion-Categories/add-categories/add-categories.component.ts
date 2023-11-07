import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieModel } from '../categorie.model';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent {
  @Output() close = new EventEmitter<any>();
  CategoriesDetails!: FormGroup;
  Submit:boolean = false;
  categorieModel!: CategorieModel;
  

  constructor(private formBuilder: FormBuilder , private categorieService : CategoriesService  ) { }
  
  ngOnInit() {

    this.CategoriesDetails = this.formBuilder.group({
        name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        code: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        description: ['', Validators.compose([Validators.required, Validators.maxLength(500)])],
    });
    this.categorieModel = new CategorieModel();
  }

  get detailsCategories() { return this.CategoriesDetails.controls; }

  closePopup(){
    this.close.emit(false);
  }

  SaveCategory(){
   this.Submit = true;
   if (this.CategoriesDetails.invalid) { return }
   

    this.categorieModel.name = this.CategoriesDetails.get('name')?.value.toString();
    this.categorieModel.code = this.CategoriesDetails.get('code')?.value;
    this.categorieModel.description = this.CategoriesDetails.get('description')?.value.toString()
    this.categorieService.addCategory(this.categorieModel)

     this.closePopup()
  }

}
