import { Component,  ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataStateChangeEventArgs, EditSettingsModel, ToolbarItems, DataSourceChangedEventArgs, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ProductStoreService } from './product-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public pageSettings: PageSettingsModel = {pageSize: 5}
  public products: Observable<DataStateChangeEventArgs>;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  title = 'asy';

  constructor(private productservice: ProductStoreService){
    this.products = productservice;
  }
 
  ngOnInit(){
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true,  mode: 'Normal'};
    this.toolbar =['Add','Edit','Delete','Update','Cancel'];
    const state: any =  {skip: 0, take: 12};
    this.productservice.execute(state);

  }
  public dataStateChange(state: DataStateChangeEventArgs): void{
    this.productservice.execute(state);
  
  } 
  public dataSourceChanged(state: DataSourceChangedEventArgs): void{
      if (state.action=='add'){ 
        this.productservice.addRecord(state).subscribe(()=>{
          state.endEdit()
        });
      }else if(state.action=='edit')
      {
        this.productservice.updateRecord(state).subscribe(()=>{
          state.endEdit()
        });
      }else if(state.requestType == 'delete')
      {
        this.productservice.deleteRecord(state).subscribe(()=>{
          state.endEdit()
        });
      }  
  }
}
