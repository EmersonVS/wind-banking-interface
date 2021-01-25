/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { TokenGenerationService } from './token-generation.service';

describe('Service: TokenGeneration', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenGenerationService]
    });
  });

  it('should ...', inject([TokenGenerationService], (service: TokenGenerationService) => {
    expect(service).toBeTruthy();
  }));
});
