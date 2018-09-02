import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Test2Service {

public _data:any = [];
private todo = './assets/todo.json';

  constructor(
        private _httpClient: HttpClient
    ) {}
    
    public getData(){
        return this._data;
    }
  
   public getTodo(){
        this._httpClient.get(this.todo).subscribe(response => {
            this._data = response;
        })    
    }
}
