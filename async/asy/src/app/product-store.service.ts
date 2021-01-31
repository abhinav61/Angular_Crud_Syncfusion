import { Injectable } from '@angular/core';
import { DataStateChangeEventArgs, DataSourceChangedEventArgs } from '@syncfusion/ej2-angular-grids';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductModel } from './product-model';
import { map} from 'rxjs/operators'; 

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json'})
};
 
@Injectable({
  providedIn: 'root'
})
export class ProductStoreService extends Subject<DataStateChangeEventArgs> {
  apiurl= 'api/products';

  constructor(private http: HttpClient ) {super(); }
  public execute(state: any): void{
    this.getProducts(state).subscribe(x=>super.next(x as DataStateChangeEventArgs));
  }
  getProducts(state?:any): Observable<any[]>{
    return this.http.get<ProductModel[]>(this.apiurl).pipe(
      map((response:any)=>(<any>{
       result: state.take > 0 ? response.slice(0,state.take):response,
       count: response.length
      })));
    }
    addRecord(state: DataSourceChangedEventArgs): Observable<ProductModel>{
      return this.http.post<ProductModel>(this.apiurl, state.data,httpOptions );  
    }
    updateRecord(state: DataSourceChangedEventArgs): Observable<any>{
      return this.http.put(this.apiurl,state.data,httpOptions);
    }
    deleteRecord(state: DataSourceChangedEventArgs): Observable<ProductModel>
    {
      const id = state.data[0].id;
      const url = `${this.apiurl}/${id}`;
 
      return this.http.delete<ProductModel>(url, httpOptions);
    }
  }
