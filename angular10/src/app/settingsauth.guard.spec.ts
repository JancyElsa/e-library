import { TestBed } from '@angular/core/testing';

import { SettingsauthGuard } from './settingsauth.guard';

describe('SettingsauthGuard', () => {
  let guard: SettingsauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SettingsauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
