import { TestBed } from '@angular/core/testing';

import { CheckSignInGuard } from './check-sign-in.guard';

describe('CheckSignInGuard', () => {
  let guard: CheckSignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckSignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
