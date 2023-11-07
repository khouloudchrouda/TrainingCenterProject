import { Component,  EventEmitter,  Output,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListCtaegories } from 'src/app/data/dropdowndata';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent {

  @Output() close = new EventEmitter<any>();
  ListCtaegory = ListCtaegories
  InformationDetails!: FormGroup;
  DescriptionDetails!: FormGroup;
  ProgrammeDetails!: FormGroup;
  information_step = false;
  description_step = false;
  programme_step = false;
  step = 1;
  modules : any[ ]= []
  constructor(private formBuilder: FormBuilder ) { }
  ngOnInit() {
        this.InformationDetails = this.formBuilder.group({
            title: ['', Validators.required],
            duree: ['', Validators.required],
            prix: ['',Validators.required],
            category: ['', Validators.required],
            niveau: ['',Validators.required],
        });
        this.DescriptionDetails = this.formBuilder.group({
            description: ['', Validators.required],
            population: ['', Validators.required],
            prerequis: ['', Validators.required]
        });
        this.ProgrammeDetails = this.formBuilder.group({        
        });
  }
  get information() { return this.InformationDetails.controls; }
  get programme() { return this.ProgrammeDetails.controls; }
  get description() { return this.DescriptionDetails.controls; }

  next(){
   
    if(this.step==1){
          this.information_step = true;
          this.step++
    }
    if(this.step==2){
        this.description_step = true;
        if (this.DescriptionDetails.controls.description.status == "INVALID" || this.DescriptionDetails.controls.prerequis.status == "INVALID" || this.DescriptionDetails.controls.population.status == "INVALID") { return }
            this.step++;
    }
  }

  previous(){
    this.step--
    if(this.step==1){
      this.information_step = false;
    }
    if(this.step==2){
      this.programme_step = false;
    }
  }

  submit(){
    if(this.step==3){
      this.programme_step = true;
      if (this.ProgrammeDetails.invalid) { return }
      console.log(this.InformationDetails.value , this.DescriptionDetails.value)
    }
  }

  gotostep(numstep : number){
     this.step = numstep
  }

  closePopup(){
    this.close.emit(false);
  }
  
  AddModule(){
    this.modules.push(1)
    
  }
  getdataDescriptionDetails(event: any , type : any):void  {
    if(type == "description"){
      this.DescriptionDetails.value.description = event
    }
    if(type == "prerequis"){
      this.DescriptionDetails.value.prerequis = event
    }
    if(type == "population"){
      this.DescriptionDetails.value.population = event
    }
  }

  getcontrolDescriptionDetails(event: any , type : any):void{
    
    if(type == "description"){
      this.DescriptionDetails.controls.description = event
    }
    if(type == "prerequis"){
      this.DescriptionDetails.controls.prerequis = event
    }
    if(type == "population"){
      this.DescriptionDetails.controls.population = event
    }
  }
}