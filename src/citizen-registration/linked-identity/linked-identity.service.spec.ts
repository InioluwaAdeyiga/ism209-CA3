import { Test, TestingModule } from '@nestjs/testing';
import { LinkedIdentityService } from './linked-identity.service';

describe('LinkedIdentityService', () => {
  let service: LinkedIdentityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkedIdentityService],
    }).compile();

    service = module.get<LinkedIdentityService>(LinkedIdentityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
