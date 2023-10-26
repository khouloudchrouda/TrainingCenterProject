import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categories } from 'src/app/data/categories';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent {
  @Output() close = new EventEmitter<any>();
  CategoriesDetails!: FormGroup;
  Submit:boolean = false;
  
  constructor(private formBuilder: FormBuilder ) { }
  
  ngOnInit() {

    this.CategoriesDetails = this.formBuilder.group({
        Titre: ['', Validators.required],
        Code: ['', Validators.required],
        Description: ['',Validators.required]
    });
    
  }

  get detailsCategories() { return this.CategoriesDetails.controls; }

  closePopup(){
    this.close.emit(false);
  }

  SaveCategory(){
    this.Submit = true
    if (this.CategoriesDetails.invalid) { return }
    this.closePopup()
    //categories.push(this.CategoriesDetails)
  }

}
