import { Test, TestingModule } from '@nestjs/testing';
import { PlateRestrictionsController } from './plate-restrictions.controller';

describe('PlateRestrictionsController', () => {
  let controller: PlateRestrictionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlateRestrictionsController],
    }).compile();

    controller = module.get<PlateRestrictionsController>(PlateRestrictionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
