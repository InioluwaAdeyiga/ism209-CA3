import { Test, TestingModule } from '@nestjs/testing';
import { LinkedidentityService } from './linkedidentity.service';

describe('LinkedidentityService', () => {
  let service: LinkedidentityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkedidentityService],
    }).compile();

    service = module.get<LinkedidentityService>(LinkedidentityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
