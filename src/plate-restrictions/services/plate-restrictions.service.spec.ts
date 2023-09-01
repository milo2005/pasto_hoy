import { Test, TestingModule } from '@nestjs/testing';
import { PlateRestrictionsService } from './plate-restrictions.service';

describe('PlateRestrictionsService', () => {
  let service: PlateRestrictionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlateRestrictionsService],
    }).compile();

    service = module.get<PlateRestrictionsService>(PlateRestrictionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
