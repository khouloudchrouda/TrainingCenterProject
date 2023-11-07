import { Component , Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-module-programme',
  templateUrl: './module-programme.component.html',
  styleUrls: ['./module-programme.component.css']
})
export class ModuleProgrammeComponent {
  @Input() modules : any[] = [] ;
  sous_modules_array : any[] = [];
  persons = {}

  removeModule(element: number){
    this.modules.forEach((value,index)=>{
      if(value==element) this.modules.splice(index,1);
  });
  }
    
  addNewDiv(i:number) {
    this.sous_modules_array.push(1)
    
  }
}
