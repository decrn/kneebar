import { PositionsModule } from './positions.module';

describe('PositionsModule', () => {
  let positionsModule: PositionsModule;

  beforeEach(() => {
    positionsModule = new PositionsModule();
  });

  it('should create an instance', () => {
    expect(positionsModule).toBeTruthy();
  });
});
