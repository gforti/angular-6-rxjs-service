import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Test2Component } from './test2/test2.component';
import { Test1Component } from './test1/test1.component';


const appRoutes: Routes = [
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
];


@NgModule({
  declarations: [
    AppComponent,
    Test2Component,
    Test1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
