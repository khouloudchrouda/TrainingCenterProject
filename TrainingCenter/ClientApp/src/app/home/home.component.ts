import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { columnsformations, formations } from '../data/formations';
import { ListCtaegories } from '../data/dropdowndata';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showDetails = false;
  type_action = "";
  showFormulaire = false
  Data = formations
  Columns = columnsformations
  ListCtaegory = ListCtaegories
  cities : any[] = []
  selectedOptions : any[] = []
  ngOnInit() {
    this.cities = [
      { item_id: 1, item_text: "New Delhi" },
      { item_id: 2, item_text: "Mumbai" },
      { item_id: 3, item_text: "Bangalore"},
      { item_id: 4, item_text: "Pune" },
      { item_id: 5, item_text: "Chennai" },
      { item_id: 6, item_text: "Navsari" }
    ];
  }

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
  // selectProduct(event) {
  //   const productId = event.target.value;
  //   const index = this.selectProd.indexOf(productId);
  
  //   if (index > -1) {
  //     // Product already selected; remove it
  //     this.selectProd.splice(index, 1);
  //   } else {
  //     // Product not yet selected; add it
  //     this.selectProd.push(productId);
  //   }
  
  //   this.slaexclusion.productId = this.selectProd;
  //   console.log(this.selectProd);
  // }
}
