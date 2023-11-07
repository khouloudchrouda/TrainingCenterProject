import { Injectable } from '@angular/core';
import { categories } from '../data/categories';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { CategorieModel } from './categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  category_data : any = {}
  constructor(private httpClient: HttpClient,) {}
  

  setCategoryId(row : object){
    this.category_data = row
  }

  getCategoryById(){
    return this.category_data
  }

  getListCategories(): Observable<HttpEvent<any>> {

    const subject: Subject<any> = new Subject();
    this.httpClient.get(`${environment.appUrl}/Categories`).subscribe((results: any) => {
      subject.next(results);
    });

    return subject;
  }

  addCategory(categorieModel: CategorieModel){

      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.httpClient.post(`${environment.appUrl}/Categories`, categorieModel, { headers }).subscribe(
         (categorieState: any) => {
          console.log('AddCategories categorieState:', categorieState);
          if (categorieState) {
            location.reload();
          }
        },
        (error) => {
          console.log('Erreur ! : ', error);
          if (error.status === 500){
            console.log('un problem existe');
            }
          },
      );
  }

  deleteCategory(categorieModel: CategorieModel){
    this.httpClient.delete(`${environment.appUrl}/Categories/${categorieModel.id}`).subscribe(
       (categorieState: any) => {
        console.log('AddCategories categorieState:', categorieState);
        location.reload();
        // if (categorieState) {
        //   location.reload();
        // }
      },
      (error) => {
        console.log('Erreur ! : ', error);
        if (error.status === 500){
          console.log('un problem existe');
          }
        },
    );
}

updateCategory(categorieModel: CategorieModel){
    
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  this.httpClient.post(`${environment.appUrl}/Categories`, categorieModel, { headers }).subscribe(
     (categorieState: any) => {
      console.log('AddCategories categorieState:', categorieState);
      if (categorieState) {
        location.reload();
      }
    },
    (error) => {
      console.log('Erreur ! : ', error);
      if (error.status === 500){
        console.log('un problem existe');
        }
      },
  );
}



}
