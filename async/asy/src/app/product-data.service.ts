import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    const products : ProductModel[]=[
     {id: 1, name:'Ram', location: 'RPalace',contact:  '4567890' },
     {id: 2, name:'Shyam', location: 'RPalace',contact:  '4567890' },
     {id: 3, name:'Bham', location: 'RPalace',contact:  '4567890' },
     {id: 4, name:'Kam', location: 'RPalace',contact:  '4567890' },
     {id: 5, name:'Dham', location: 'RPalace',contact:  '4567890' },
     {id: 6, name:'Kuo', location: 'RPalace',contact:  '4567890' },
     {id: 7, name:'Mohan', location: 'RPalace',contact:  '4567890' },
     {id: 8, name:'Ram', location: 'RPalace',contact:  '4567890' },
     {id: 9, name:'Ram', location: 'RPalace',contact:  '4567890' },
     {id: 1, name:'Ram', location: 'RPalace',contact:  '4567890' },
     {id: 2, name:'Shyam', location: 'RPalace',contact:  '4567890' },
     {id: 3, name:'Bham', location: 'RPalace',contact:  '4567890' },
     {id: 4, name:'Kam', location: 'RPalace',contact:  '4567890' },
     {id: 5, name:'Dham', location: 'RPalace',contact:  '4567890' },
     {id: 6, name:'Kuo', location: 'RPalace',contact:  '4567890' },
     {id: 7, name:'Mohan', location: 'RPalace',contact:  '4567890' },
     {id: 8, name:'Ram', location: 'RPalace',contact:  '4567890' },
     {id: 9, name:'Ram', location: 'RPalace',contact:  '4567890' }
    ];
    return { products}
  }
}
