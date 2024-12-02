/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrevisaoService } from './previsao.service';

describe('Service: Previsao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrevisaoService]
    });
  });

  it('should ...', inject([PrevisaoService], (service: PrevisaoService) => {
    expect(service).toBeTruthy();
  }));
});
