import { TestBed } from '@angular/core/testing';
import { Adminduties } from './adminduties';

describe('Adminduties', () => {
  let service: Adminduties;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Adminduties);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
