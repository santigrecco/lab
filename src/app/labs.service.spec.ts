/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LabsService } from './labs.service';

describe('LabsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabsService]
    });
  });

  it('should ...', inject([LabsService], (service: LabsService) => {
    expect(service).toBeTruthy();
  }));
});
