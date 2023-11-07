import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiSelectdataService {
  constructor() { }

  categories: any = [
    { id: "0", name: "reseau",  running: false },
    { id: "1", name: "securite",  running: false },
    { id: "2", name: "devops",  running: false },
    { id: "3", name: "design",  running: false },
    { id: "4", name: "developpement", running: false },
 
  ];

  public getCategory(): any[] {
    return this.categories;
  }

}
