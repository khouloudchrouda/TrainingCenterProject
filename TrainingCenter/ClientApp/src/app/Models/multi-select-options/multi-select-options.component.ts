import { Component } from '@angular/core';
import { ListCtaegories } from 'src/app/data/dropdowndata';

@Component({
  selector: 'app-multi-select-options',
  templateUrl: './multi-select-options.component.html',
  styleUrls: ['./multi-select-options.component.css']
})
export class MultiSelectOptionsComponent {
  showOption : boolean = false;
  tickedAll : any ;
  selectedOptions : any [] = []
  label: String = ""
  options = ListCtaegories
  modelValue : any [] = []

   selectclick(event : any){
    if (!this.showOption) {
        this.showOption = true;
    } else {
        if (event.target.matches(".select") || !event.target.closest(".select-options")) {
            this.showOption = false;
        }
    }
}

checkboxclicked(){
  
}



}
