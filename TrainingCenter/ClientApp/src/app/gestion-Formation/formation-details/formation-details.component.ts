import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Populationcible, Prerequis, Programmeformations } from 'src/app/data/formations';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent {
  @Input() type : string = "" ;
  @Output() close = new EventEmitter<any>();

  showPopupDelete = false
  show = false
  populationCible = Populationcible
  listPrerequis = Prerequis
  ListProgramme = Programmeformations
  courentItem!: number;
  title : string = 'Voulez-vous vraiment supprimer La Formation?';

  
  selectPanel(i: number){
    this.courentItem = i
    this.show = !this.show
  }

  DeleteFormation(){
    this.showPopupDelete = true
  }

  closePopup(){
    this.close.emit(false);
  }
  EditFormation(){
    
  }

}
