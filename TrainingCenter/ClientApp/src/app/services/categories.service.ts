import { Injectable } from '@angular/core';
import { categories } from '../data/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  category_id : any
  category_data : any = {}
  constructor() { }

  getListCategories(){

  };

  setCategoryId(id : string){
    this.category_id = Object.values(id)[0]
  }

  getCategoryById(){
    categories.forEach((v : any) => {
      if (v.N === this.category_id) {
        this.category_data = v
      }
    });
    return this.category_data
}

  addCategory(){
    
  }

}
