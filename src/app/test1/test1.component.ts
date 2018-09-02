import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import {Test1Service} from '../test1.service' 

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnDestroy, OnInit {

   public data = [];
   private _subscription: Subscription;

    constructor(
        private _Test1Service: Test1Service
    ) { }

    public ngOnInit() {        
        this._subscription = this._Test1Service.dataAnnounced().subscribe(this.setInitialValues.bind(this));
        this._Test1Service.getTodo();
    }

    public ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    
    private setInitialValues( dataAnnounced ) {
        this.data = dataAnnounced;
        console.log(this.data)
    }

}
