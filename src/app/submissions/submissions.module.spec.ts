import { SubmissionsModule } from './submissions.module';

describe('SubmissionsModule', () => {
  let submissionsModule: SubmissionsModule;

  beforeEach(() => {
    submissionsModule = new SubmissionsModule();
  });

  it('should create an instance', () => {
    expect(submissionsModule).toBeTruthy();
  });
});
