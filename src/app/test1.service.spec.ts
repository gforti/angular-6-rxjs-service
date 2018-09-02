import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { Test1Service } from './test1.service';

// ng test --code-coverage

describe('Test1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Test1Service],
      imports: [ HttpClientModule ]
    });
  });

  it('should be created', inject([Test1Service], (service: Test1Service) => {
    expect(service).toBeTruthy();
  }));
  
  it('should return an array', inject([Test1Service], (service: Test1Service) => {
      service.dataAnnounced().subscribe(result => expect(Array.isArray(result)).toBeTruthy());
       spyOn(service, "getTodo").and.callFake(function() {
          this._data = ['wow'];
          this.announceData();        
      });
      service.getTodo();
  }));
  
  it('should return an array with length', inject([Test1Service], (service: Test1Service) => {
      service.dataAnnounced().subscribe(result => expect(result.length).toBeGreaterThan(0));
      spyOn(service, "getTodo").and.callFake(function() {
          this._data = ['wow'];
          this.announceData();        
      });
        service.getTodo();
  }));
    
  
  it('should have value of wow', inject([Test1Service], (service: Test1Service) => {
      service.dataAnnounced().subscribe(result => expect(result[0]).toEqual('wow'));
      spyOn(service, "getTodo").and.callFake(function() {
          this._data = ['wow'];
          this.announceData();        
      });
        service.getTodo();
  }));
  
  it('should have disposed data', inject([Test1Service], (service: Test1Service) => {
      service.dataAnnounced().subscribe(
            (value) => { },
            (error) => { },
            () => { expect(service.disposeData).toHaveBeenCalled(); }
        );      
      service.disposeData();
  }));
  
});
