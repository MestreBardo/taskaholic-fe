/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrudUserService } from './crudUser.service';

describe('Service: CrudUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudUserService]
    });
  });

  it('should ...', inject([CrudUserService], (service: CrudUserService) => {
    expect(service).toBeTruthy();
  }));
});
