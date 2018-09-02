import { Component, OnInit } from '@angular/core';

import {Test2Service} from '../test2.service' 

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

    public data = [];
    
  constructor(
    private _Test2Service: Test2Service
  ) { }

  ngOnInit() {
      this.data = this._Test2Service._data;
      this._Test2Service.getTodo();
      
  }

}
