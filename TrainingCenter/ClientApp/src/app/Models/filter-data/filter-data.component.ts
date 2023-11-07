import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.css']
})
export class FilterDataComponent {
  @Output() close = new EventEmitter<any>();
  @Input() FilterDef : any = {} ;


  ngOnInit() {
    
    console.log(this.FilterDef)
    }
    getObjectKeys(obj: any): string[] {
      return Object.keys(obj);
    }
  closePopup(){
    this.close.emit(false);
  }
}
