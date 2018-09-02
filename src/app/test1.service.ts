import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Test1Service {
    
    private _dataAnnouncedSource = new ReplaySubject<any>(1);
    private _data:any = [];
    private todo = './assets/todo.json';

  constructor(
        private _httpClient: HttpClient
    ) {}

    public dataAnnounced(): Observable<any> {
        return this._dataAnnouncedSource.asObservable();
    }

    public announceData() {
        this._dataAnnouncedSource.next(this._data);
    }

    public disposeData() {
        this._dataAnnouncedSource.complete();
        this._dataAnnouncedSource = new ReplaySubject<any>(1);
    }
    
    public getTodo(){
        this._httpClient.get(this.todo).subscribe(response => {
            this._data = response;
            this.announceData();
        })    
    }
    
}
