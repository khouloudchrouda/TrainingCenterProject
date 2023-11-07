import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select-drop-down',
  templateUrl: './multi-select-drop-down.component.html',
  styleUrls: ['./multi-select-drop-down.component.css']
})
export class MultiSelectDropDownComponent implements OnInit {
  @Input() data: any = {} ;
  @Input() label: string = "" ;
  checkedList :any = [];
  currentSelected:any = {};
  showDropDown:boolean = false

  constructor(){}
  ngOnInit() : void {
    
  }
  selectclick(item: any) {
    console.log(item);
  }
  tickAllOptions(event : any, options : any){
    console.log(event);
  }
  checkboxclicked(){

  }
  unTickAllOptions(){}


  getSelectedValue(status:Boolean,value:String){
    if(status){
      this.checkedList.push(value);  
    }else{
        var index = this.checkedList.indexOf(value);
        this.checkedList.splice(index,1);
    }
    
    this.currentSelected = {checked : status,name:value};


}
getObjectKeys(obj: any): string[] {
  return Object.keys(obj);
}

}