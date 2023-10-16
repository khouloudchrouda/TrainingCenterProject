import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent {

  InformationDetails!: FormGroup;
  DescriptionDetails!: FormGroup;
  ProgrammeDetails!: FormGroup;
  information_step = false;
  description_step = false;
  programme_step = false;
  step = 1;
  constructor(private formBuilder: FormBuilder) { }
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
            highest_qualification: ['', Validators.required],
            university: ['', Validators.required],
            total_marks: ['',Validators.required]
        });
  }
  get information() { return this.InformationDetails.controls; }
  get programme() { return this.ProgrammeDetails.controls; }
  get description() { return this.DescriptionDetails.controls; }

  next(){
    if(this.step==1){
          this.information_step = true;
          if (this.InformationDetails.invalid) { return  }
          this.step++
    }
    if(this.step==2){
        this.description_step = true;
        if (this.DescriptionDetails.invalid) { return }
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
    }
  }

  gotostep(numstep : number){
     this.step = numstep
  }
  
}