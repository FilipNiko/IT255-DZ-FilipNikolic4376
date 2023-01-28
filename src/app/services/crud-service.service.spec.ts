import { TestBed, inject } from '@angular/core/testing';

import { CrudServiceService } from './crud-service.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Let } from '../let/let.model';

describe('CrudServiceService', () => {
  let service: CrudServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({

      providers: [CrudServiceService],
      imports: [HttpClientTestingModule]

    });
    service = TestBed.inject(CrudServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  afterEach(
    inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
    })
    );
    

  it('izvršava GET', () => {

    const leet1 = new Let("A","1234","D","123","123",true, true, true);
    leet1.id=1;

    const dummyLetovi: Let[] = [
      leet1
    ];

   service.getFlights().subscribe(letovi => {
    expect(dummyLetovi).toEqual(letovi);
    expect(dummyLetovi.length).toEqual(1);
   });
    
   const req =  httpMock.expectOne("http://localhost:3000/letovi");
   expect(req.request.method).toBe('GET');
   expect(req.request.responseType).toBe('json');
   req.flush(dummyLetovi);

  });
  



  it('izvršava POST', () => {

    let leet1 = new Let("A","1234","D","123","123",true, true, true);
    leet1.id=1;

    service.postFlight(leet1).subscribe(noviLet => {
      expect(noviLet).toEqual(leet1)
    });

    const req =  httpMock.expectOne("http://localhost:3000/letovi");
   expect(req.request.method).toBe('POST');
   expect(req.request.responseType).toBe('json');
   req.flush(leet1);

});


it('izvršava DELETE', () => {

  let leet1 = new Let("A","1234","D","123","123",true, true, true);
  leet1.id=1;

  service.deleteFlight(1).subscribe(izbrisaniLet => {
    expect(izbrisaniLet).toEqual(leet1)
  });

  const req =  httpMock.expectOne("http://localhost:3000/letovi/"+ leet1.id);
 expect(req.request.method).toBe('DELETE');
 expect(req.request.responseType).toBe('json');
 req.flush(leet1);

});


it('izvršava UPDATE', () => {

  let leet1 = new Let("A","1234","D","123","123",true, true, true);
  leet1.id=1;

  service.updateFlight(leet1, 1).subscribe(leet => {
    expect(leet).toEqual(leet1)
  });

  const req =  httpMock.expectOne("http://localhost:3000/letovi/"+ leet1.id);
 expect(req.request.method).toBe('PUT');
 expect(req.request.responseType).toBe('json');
 req.flush(leet1);

});

});
