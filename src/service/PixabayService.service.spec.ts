/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PixabayServiceService } from './PixabayService.service';

describe('Service: PixabayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PixabayServiceService]
    });
  });

  it('should ...', inject([PixabayServiceService], (service: PixabayServiceService) => {
    expect(service).toBeTruthy();
  }));
});
