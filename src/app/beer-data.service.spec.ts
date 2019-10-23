import { TestBed } from '@angular/core/testing';
import { BeerDataService } from './beer-data.service';
import { inject } from '@angular/core';

describe('BeerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerDataService]
    });
  });

  it('should ...', inject([BeerDataService], (service: BeerDataService) => {
    expect(service).toBeTruthy();
  }));
});
