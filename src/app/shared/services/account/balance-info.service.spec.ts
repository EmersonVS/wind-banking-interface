/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BalanceInfoService } from './balance-info.service';

describe('Service: BalanceInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BalanceInfoService]
    });
  });

  it('should ...', inject([BalanceInfoService], (service: BalanceInfoService) => {
    expect(service).toBeTruthy();
  }));
});
