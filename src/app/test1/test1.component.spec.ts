import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1Component } from './test1.component';

import { HttpClientModule } from '@angular/common/http';

import { Test1Service } from '../test1.service';

describe('Test1Component', () => {
  let component: Test1Component;
  let fixture: ComponentFixture<Test1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test1Component ],
      providers: [Test1Service],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
